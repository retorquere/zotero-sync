import * as fs from 'fs'
import * as path from 'path'
const stringify = require('json-stringify-pretty-compact')

import type { Zotero } from './typings/zotero'

// represents a personal or group library
export class Library implements Zotero.Library {
  private filename: string
  private collections: Zotero.Collection[]
  private items: Zotero.Item.Any[]
  public name: string
  public version: number

  // load the whole library when requested
  public async load(filename: string): Promise<Library> {
    this.filename = filename
    try {
      // place whatever is in the file on this object
      Object.assign(this, JSON.parse(await fs.promises.readFile(this.filename, 'utf-8')))
    }
    catch (err) {
      // when something goes wrong (such as the file not yet existing), initialize to empty library
      this.items = []
      this.collections = []
      this.version = 0
      this.name = ''
    }
    return this
  }

  // add a collection
  public async add_collection(collection: Zotero.Collection): Promise<void> {
    // collections can also be added when they are modified, so remove it first
    await this.remove_collections([collection.key])
    this.collections.push(collection)
  }
  public async remove_collections(keys: string[]): Promise<void> { // eslint-disable-line @typescript-eslint/require-await
    // remove it by just forgetting it
    this.collections = this.collections.filter(coll => !keys.includes(coll.key))
  }

  public async add(item: Zotero.Item.Any): Promise<void> {
    // add or modify single item. Modify = remove + add
    await this.remove([item.key])
    this.items.push(item)
  }
  public async remove(keys: string[]): Promise<void> { // eslint-disable-line @typescript-eslint/require-await
    // remove it by just forgetting it
    this.items = this.items.filter(item => !(keys.includes(item.key)))
  }

  // save to disk
  public async save(name: string, version: number): Promise<void> {
    this.name = name
    this.version = version
    await fs.promises.writeFile(this.filename, stringify({ items: this.items, collections: this.collections, name: this.name, version: this.version }) as string)
  }
}

export class Store implements Zotero.Store {
  public libraries: string[]
  private dir: string

  // would have preverred to do this in the constructor, but async
  public async load(dir: string): Promise<Store> {
    this.dir = dir
    this.libraries = (await fs.promises.readdir(dir)).filter(name => name.startsWith('%') && name.endsWith('.json')).map(name => decodeURIComponent(name.replace(/\.json$/, '')))
    return this
  }

  // remove library
  public async remove(user_or_group_prefix: string): Promise<void> {
    try {
      await fs.promises.unlink(path.join(this.dir, this.filename(user_or_group_prefix)))
      this.libraries = this.libraries.filter(prefix => prefix !== user_or_group_prefix)
    }
    catch (err) {
      // pass
    }
  }

  // get existing library or create new
  public async get(user_or_group_prefix: string): Promise<Library> {
    const library = new Library()
    if (!this.libraries.includes(user_or_group_prefix)) this.libraries.push(user_or_group_prefix)
    return await library.load(path.join(this.dir, this.filename(user_or_group_prefix)))
  }

  private filename(user_or_group_prefix: string): string {
    return `${encodeURIComponent(user_or_group_prefix)}.json`
  }
}
