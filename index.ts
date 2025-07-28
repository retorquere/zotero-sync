import * as events from 'events'
import fetch from 'node-fetch'

import type { Zotero } from './typings/zotero'

function enumerate<T>(array: T[]): [number, T][] {
  return array.map((v: T, i: number) => [i, v])
}

type RemoteLibrary = {
  type: 'group' | 'user' | 'local'
  prefix: string
  name: string
  version?: number
}

export class Sync {
  static event = {
    library: 'zotero-sync.save-library',
    collection: 'zotero-sync.save-collection',
    remove: 'zotero-sync.remove-objects',
    item: 'zotero-sync.save-item',
    error: 'zotero-sync.error',
  }

  protected headers: Record<string, string> = { 'Zotero-API-Version': '3' }
  private batch: number

  public userID: number
  public libraries: Record<string, RemoteLibrary> = {}
  public emitter: events.EventEmitter

  constructor(batch = 50, emitter?: events.EventEmitter) { // eslint-disable-line no-magic-numbers
    this.batch = batch
    this.emitter = emitter || new events.EventEmitter()
  }

  public on(event: string, handler: (...args: any[]) => void): void {
    this.emitter.on(event, handler)
  }

  public local(): void {
    const prefix = '/api/users/0'
    this.libraries[prefix] = {
      type: 'local',
      prefix,
      name: '',
    }
    this.userID = 0
  }

  public async login(api_key: string): Promise<void> {
    this.headers.Authorization = `Bearer ${api_key}`
    const account = await this.json('https://api.zotero.org/keys/current')

    if (account.access?.user?.library) {
      const prefix = `/users/${account.userID}`
      this.libraries[prefix] = {
        type: 'user',
        prefix,
        name: '',
      }
    }

    for (const library of await this.json(`https://api.zotero.org/users/${account.userID}/groups`)) {
      if (account.access.groups.all || account.access.groups[library.id]) {
        const prefix = `/groups/${library.id}`
        this.libraries[prefix] = {
          type: 'group',
          prefix,
          name: library.data.name,
        }
      }
    }

    this.userID = account.userID
  }

  protected async fetch(url: string) {
    return await fetch(url, { headers: this.headers })
  }

  private async json(url: string): Promise<any> {
    return await (await this.fetch(url)).json() // eslint-disable-line @typescript-eslint/no-unsafe-return
  }

  public async get(prefix: string, uri: string): Promise<any> {
    const library = this.libraries[prefix]
    if (!library) throw new Error(`${this.userID} does not have access to ${prefix}`)

    const baseUrl = (library.type === 'local') ? 'http://localhost:23119' : 'https://api.zotero.org'
    uri = `${baseUrl}${prefix}${uri}`

    const res = await this.fetch(uri)

    if (typeof library.version === 'number') {
      if (res.headers.get('last-modified-version') !== `${library.version}`) {
        throw new Error(`last-modified-version changed from ${library.version} to ${res.headers.get('last-modified-version')} during sync, retry later`)
      }
    }
    else {
      library.version = parseInt(res.headers.get('last-modified-version'))
      if (isNaN(library.version)) throw new Error(`${res.headers.get('last-modified-version')} is not a number`)
    }

    return await res.json() // eslint-disable-line @typescript-eslint/no-unsafe-return
  }

  public async sync(store: Zotero.Store, includeTrashed = true): Promise<void> {
    // remove libraries we no longer have access to
    const libraries = Object.keys(this.libraries)
    for (const user_or_group_prefix of store.libraries) {
      if (!user_or_group_prefix.startsWith('/users/') && !libraries.includes(user_or_group_prefix)) await store.remove(user_or_group_prefix)
    }

    // update all libraries
    for (const [n, [prefix, library]] of enumerate(Object.entries(this.libraries))) {
      this.emitter.emit(Sync.event.library, library, n + 1, libraries.length)

      try {
        await this.update(store, prefix, includeTrashed)
      }
      catch (err) {
        this.emitter.emit(Sync.event.error, err)
      }
    }
  }

  private async update(store: Zotero.Store, prefix: string, includeTrashed: boolean) {
    const stored: Zotero.Library = await store.get(prefix)
    const remote = this.libraries[prefix]

    if (remote.type !== 'local') { // local does not yet support deleted
      // first fetch also gets the remote version
      const deleted: {
        collections: string[]
        searches: string[]
        items: string[]
        tags: string[]
      } = await this.get(prefix, `/deleted?since=${stored.version}`)
      if (stored.version === remote.version) return

      if (deleted.items.length) {
        this.emitter.emit(Sync.event.remove, 'items', deleted.items)
        await stored.remove(deleted.items)
      }
      if (deleted.collections.length) {
        this.emitter.emit(Sync.event.remove, 'collections', deleted.collections)
        await stored.remove_collections(deleted.collections)
      }
    }

    const items: string[] = Object.keys(await this.get(prefix, `/items?since=${stored.version}&format=versions&includeTrashed=${Number(includeTrashed)}`) as Record<string, number>)
    for (let n = 0; n < items.length; n++) {
      for (const item of await this.get(prefix, `/items?itemKey=${items.slice(n, n + this.batch).join(',')}&includeTrashed=${Number(includeTrashed)}`)) {
        await stored.add(item.data as Zotero.Item.Any)
        n += 1
        this.emitter.emit(Sync.event.item, item.data, n, items.length)
      }
    }

    const collections: string[] = Object.keys(await this.get(prefix, `/collections?since=${stored.version}&format=versions`) as Record<string, number>)
    for (let n = 0; n < collections.length; n++) {
      for (const collection of await this.get(prefix, `/collections?collectionKey=${collections.slice(n, n + this.batch).join(',')}`)) {
        await stored.add_collection(collection.data as Zotero.Collection)
        n += 1
        this.emitter.emit(Sync.event.collection, collection.data, n, collections.length)
      }
    }

    await stored.save(remote.type === 'group' ? remote.name : undefined, remote.version)
  }
}
