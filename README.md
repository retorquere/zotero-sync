# Zotero one-way sync

* Get a Zotero API key [here](https://www.zotero.org/settings/keys/new) -- the key only needs read only access to what you want to have synced


```
import { Sync } from '@retorquere/zotero-sync'
import { Store } from '@retorquere/zotero-sync/json-store'

(async () => {
  const zotero = new Sync

  // will emit the following so you can track progress:
  // emit(Sync.event.library, <library name>, n, total number of libraries). Library name is empty for the main library, if there's a name, it's a group library
  // emit(Sync.event.error, err)
  // emit(Sync.event.item, n, total number of items within library)
  // emit(Sync.event.collection, collection.name, n, number of collections within library)
  for (const event of [ Sync.event.library, Sync.event.collection, Sync.event.item, Sync.event.error ]) {
    zotero.on(event, (e => function() { console.log(e, [...arguments]) })(event))
  }
  await zotero.login(process.env.ZOTERO_API_KEY)
  await zotero.sync(await (new Store).load('data'))
})().catch(err => {
  console.log(err)
  process.exit(1)
})
```

or

```
const Sync = require('@retorquere/zotero-sync').Sync
const Store = require('@retorquere/zotero-sync/json-store').Store

(async () => {
  const zotero = new Sync;
  for (const event of [Sync.event.library, Sync.event.collection, Sync.event.item, Sync.event.error]) {
    zotero.on(event, (e => function () { console.log(e, [...arguments]); })(event));
  }
  await zotero.login(process.env.ZOTERO_API_KEY);
  await zotero.sync(await (new Store).load('data'));
})().catch(err => {
    console.log(err);
    process.exit(1);
});
```

make your own store by implementing

```
interface Library {
  version: number
  name: string
  save: (name: string, version: number) => Promise<void>
  remove_collections: (keys: string[]) => Promise<void>
  add_collection: (collection: Collection) => Promise<void>
  add: (item: Item.Any) => Promise<void>
  remove: (keys: string[]) => Promise<void>
}

interface Store {
  libraries: string[] // user_or_group_prefix
  remove: (user_or_group_prefix: string) => Promise<void>
  get: (user_or_group_prefix: string) => Promise<Library> // must return a library -- create one if it doesn't exist yet
}
```
