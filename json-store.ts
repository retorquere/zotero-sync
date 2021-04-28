import * as fs from 'fs'
import * as path from 'path'
const stringify = require('json-stringify-pretty-compact')

import type { Zotero } from './typings/zotero'

export class Library implements Zotero.Library {
  private filename: string
  private collections: Zotero.Collection[]
  private items: Zotero.Item.Any[]
  public name: string
  public version: number

  public async load(filename: string): Promise<Library> {
    this.filename = filename
    let items: Zotero.Item.Any[] = []
    let collections: Zotero.Collection[] = []
    let version = 0
    let name = ''
    try {
      ({ items, collections, version, name } = JSON.parse(await fs.promises.readFile(this.filename, 'utf-8')))
    }
    catch (err) {
      // pass
    }
    this.items = items
    this.collections = collections
    this.name = name
    this.version = version
    return this
  }

  public async add_collection(collection: Zotero.Collection): Promise<void> {
    await this.remove_collections([collection.key])
    this.collections.push(collection)
  }
  public async remove_collections(keys: string[]): Promise<void> { // eslint-disable-line @typescript-eslint/require-await
    this.collections = this.collections.filter(coll => !keys.includes(coll.key))
  }

  public async add(item: Zotero.Item.Any): Promise<void> {
    await this.remove([item.key])
    this.items.push(item)
  }
  public async remove(keys: string[]): Promise<void> { // eslint-disable-line @typescript-eslint/require-await
    this.items = this.items.filter(item => !(keys.includes(item.key)))
  }

  public async save(name: string, version: number): Promise<void> {
    this.name = name
    this.version = version
    await fs.promises.writeFile(this.filename, stringify({ items: this.items, collections: this.collections, name: this.name, version: this.version }))
  }
}

export class Store implements Zotero.Store {
  public libraries: string[]
  private path: string

  public async load(dir: string): Promise<Store> {
    this.dir = dir
    this.libraries = (await fs.promises.readdir(path)).filter(name => name.startsWith('%') && name.endsWith('.json')).map(name => decodeURIComponent(name.replace(/\.json$/, '')))
    return this
  }

  public async remove(user_or_group_prefix: string): Promise<void> {
    try {
      await fs.promises.unlink(path.join(this.dir, this.filename(user_or_group_prefix)))
      this.libraries = this.libraries.filter(prefix => prefix !== user_or_group_prefix)
    }
    catch (err) {
      // pass
    }
  }

  public async get(user_or_group_prefix: string): Promise<Library> {
    const library = new Library
    if (!this.libraries.includes(user_or_group_prefix)) this.libraries.push(user_or_group_prefix)
    return await library.load(path.join(this.dir, this.filename(user_or_group_prefix)))
  }

  private filename(user_or_group_prefix: string): string {
    return `${encodeURIComponent(user_or_group_prefix)}.json`
  }
}
