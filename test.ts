import { Zotero } from './index'
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
  const zotero = new Zotero

  for (const event of [ Zotero.event.library, Zotero.event.collection, Zotero.event.item, Zotero.event.error ]) {
    zotero.on(event, (e => function() { console.log(e, [...arguments]) })(event))
  }
  await zotero.login(process.env.ZOTERO_API_KEY)
  await zotero.sync(await (new Store).load('data'))
})
