# Zotero one-way sync

* Get a Zotero API key [here](https://www.zotero.org/settings/keys/new) -- the key only needs read only access to what you want to have synced


```
import { Sync } from '@retorquere/zotero-sync'
import { Store } from '@retorquere/zotero-sync/json-store' // or implement your own
import type { Zotero } from './typings/zotero'

const zotero = new Zotero
for (const event of [ Zotero.event.library, Zotero.event.collection, Zotero.event.item, Zotero.event.error ]) {
  zotero.on(event, (e => function() { console.log(e, [...arguments]) })(event))
}

zotero.login(process.env.ZOTERO_API_KEY)
  .then(() => (new Store).load('data'))
  .then(store => zotero.sync(store))
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
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
  get: (user_or_group_prefix: string) => Promise<Library>
}
```
