const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
 
async function getJSON(url) {
  return await (await fetch(url)).json()
}

async function get_type(itemType) {
  console.log(itemType)
  const typing = {}
  let type
  for (const [k, v] of Object.entries(await getJSON(`https://api.zotero.org/items/new?itemType=${itemType}`))) {
    if (k === 'itemType') continue

    if (typeof v === 'string') {
      type = 'string'
    }
    else if (k === 'creators') {
      const creatorTypes = (await getJSON(`https://api.zotero.org/itemTypeCreatorTypes?itemType=${itemType}`)).map(creatorType => `'${creatorType.creatorType}'`).join(' | ')
      type = `{ creatorType: ${creatorTypes}, name?: string, firstName?: string, kastName?: string }[]`
    }
    else if (k === 'tags' || k === 'collections') {
      type = 'string[]'
    }
    else if (k === 'relations') {
      type = "Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>"
    } else {
      throw new Error(k)
    }
    typing[k] = type
  }
  return typing
}

async function main() {
  const itemTypes = {}
  for (let itemType of await getJSON('https://api.zotero.org/itemTypes')) {
    itemType = itemType.itemType[0].toUpperCase() + itemType.itemType.substr(1)
    itemTypes[itemType] = await get_type(itemType)
  }
  const typing = ejs.render(await fs.promises.readFile(path.join(__dirname, 'zotero.ejs'), 'utf-8'), { itemTypes })
  await fs.promises.writeFile(path.join(__dirname, 'zotero.d.ts'), typing)
}

main()
