/*
# icons.js

This script ingests an icomoon `selection.json` file and also finds any svg
files in the specified `iconDirectories`.
*/

import selection from './demo/xinjs-icon-font/selection.json'
import fs from 'fs'
import path from 'path'

const iconDirectories = ['./demo/icons']
const typeDeclaration = "import { IconData } from './icon-types'"

const outputFilePath = './src/icon-data.ts'

const roundNearest = (s) =>
  s.replace(/\d+\.\d+/g, (floatString) => {
    return Number(floatString).toFixed(0)
  })

function findIcons(dirs, ignore = []) {
  function traverseDirectory(dir, ignore) {
    const files = fs.readdirSync(dir)
    if (ignore.includes(dir)) {
      return
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file)
      const stats = fs.statSync(filePath, ignore)

      if (stats.isDirectory()) {
        traverseDirectory(filePath, ignore)
      } else if (path.extname(file) === '.svg') {
        const content = fs.readFileSync(filePath, 'utf8')
        iconData[file.split('.')[0]] = {
          raw: content
            .replace(/(<\?xml.*?>|<!DOCTYPE.*?>)\s?/g, '')
            .replace(/<svg.*?>/, (a) =>
              a.replace(/\b(x|y|width|height)=".*?" /g, '')
            )
            .replace(/fill="#000000"/g, ''),
        }
      }
    })
  }

  dirs.forEach((dir) => {
    traverseDirectory(dir, ignore)
  })
}

const iconData = selection.icons.reduce((map, icon) => {
  const iconName = icon.properties.name
    .replace(/_/g, '-')
    .replace(/-([a-z])/g, (_, char) => char.toLocaleUpperCase())
  const iconSpec = { p: icon.icon.paths.map(roundNearest) }
  if (icon.icon.isMulticolor) {
    iconSpec.c = icon.icon.attrs.map((attr) => {
      if (attr.opacity && attr.opacity < 1) {
        return attr.fill
          .replace(/rgb/, 'rgba')
          .replace(/, /g, ',')
          .replace(/\)/, `,${attr.opacity})`)
      } else {
        return attr.fill.replace(/, /g, ',')
      }
    })
  }
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

findIcons(iconDirectories)

const source =
  typeDeclaration +
  '\n\nexport default ' +
  JSON.stringify(iconData, null, 2).replace(/"(\w+)":/g, '$1:') +
  ' as IconData\n'

fs.writeFileSync(outputFilePath, source, 'utf8')
