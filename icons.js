import selection from './demo/xinjs-icon-font/selection.json'
import fs from 'fs'

const outputFilePath = './src/icon-data.ts'

const iconData = selection.icons
  .filter((icon) => icon.icon.isMulticolor === false)
  .reduce((map, icon) => {
    const iconName = icon.properties.name
      .replace(/_/g, '-')
      .replace(/-([a-z])/g, (_, char) => char.toLocaleUpperCase())
    map[iconName] = icon.icon.paths
    return map
  }, {})

function saveAsJSON(data, outputFilePath) {
  const jsonData = JSON.stringify(data, null, 2)
  fs.writeFileSync(outputFilePath, jsonData, 'utf8')
}
const source =
  'export default ' +
  JSON.stringify(iconData, null, 2).replace(/"(\w+)":/g, '$1:') +
  ' as { [key: string]: string[] }\n'

fs.writeFileSync(outputFilePath, source, 'utf8')
