/* eslint-disable no-console */

import { Sync } from './index'
import { Store } from './json-store'

(async () => {
  const zotero = new Sync

  for (const event of [ Sync.event.library, Sync.event.collection, Sync.event.remove, Sync.event.item, Sync.event.error ]) {
    zotero.on(event, (e => function() { console.log(e, [...arguments]) })(event)) // eslint-disable-line prefer-arrow/prefer-arrow-functions, prefer-rest-params
  }
  await zotero.login(process.env.ZOTERO_API_KEY)
  await zotero.sync(await (new Store).load('data'))
})().catch(err => {
  console.log(err)
  process.exit(1)
})
