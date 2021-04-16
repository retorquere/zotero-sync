import { Sync } from './index'
import { Store } from './json-store'

function main(asyncMain) {
  asyncMain()
    .then(exitCode => {
      process.exit(exitCode || 0)
    })
    .catch(err => {
      console.log(err)
      process.exit(1)
    })
}

main(async () => {
  const zotero = new Sync

  for (const event of [ Sync.event.library, Sync.event.collection, Sync.event.item, Sync.event.error ]) {
    zotero.on(event, (e => function() { console.log(e, [...arguments]) })(event))
  }
  await zotero.login(process.env.ZOTERO_API_KEY)
  await zotero.sync(await (new Store).load('data'))
})
