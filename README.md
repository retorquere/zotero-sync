# Zotero one-way sync

* Get a Zotero API key [here](https://www.zotero.org/settings/keys/new) -- the key only needs read only access to what you want to have synced


```
import { Zotero } from '@retorquere/zotero-sync'
import { Store } from '@retorquere/zotero-sync/json-store' // or implement your own

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
