import selection from './demo/xinjs-icon-font/selection.json'
import fs from 'fs'

const typeDeclaration = `type IconSpec = string | { w?: number; h?: number; p: string[] }
type IconData = { [key: string]: IconSpec }`

const outputFilePath = './src/icon-data.ts'

const roundNearest = (s) =>
  s.replace(/\d+\.\d+/g, (floatString) => {
    return Number(floatString).toFixed(0)
  })

const iconData = selection.icons
  .filter((icon) => icon.icon.isMulticolor === false)
  .reduce((map, icon) => {
    const iconName = icon.properties.name
      .replace(/_/g, '-')
      .replace(/-([a-z])/g, (_, char) => char.toLocaleUpperCase())
    const iconSpec = { p: icon.icon.paths.map(roundNearest) }
    const { width, height } = icon.icon
    if (width !== undefined && width !== 1024) {
      iconSpec.w = width
    }
    if (height !== undefined && height !== 1024) {
      iconSpec.h = height
    }
    if (
      iconSpec.w !== undefined ||
      iconSpec.h !== undefined ||
      iconSpec.p.length > 1
    ) {
      map[iconName] = iconSpec
    } else {
      map[iconName] = iconSpec.p[0]
    }
    return map
  }, {})

const source =
  typeDeclaration +
  '\n\nexport default ' +
  JSON.stringify(iconData, null, 2).replace(/"(\w+)":/g, '$1:') +
  ' as IconData\n'

fs.writeFileSync(outputFilePath, source, 'utf8')
