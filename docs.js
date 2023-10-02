// this code was originally written by chatGPT
// then formatted by prettier

const fs = require('fs')
const path = require('path')

const TRIM_REGEX = /^#+ |`/g

function findMarkdownFiles(dirs, ignore) {
  let markdownFiles = []

  function traverseDirectory(dir, ignore) {
    const files = fs
      .readdirSync(dir)
      .sort((a, b) => (a.toLocaleLowerCase() < b.toLocaleLowerCase() ? -1 : 1))
    if (ignore.includes(dir)) {
      return
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file)
      const stats = fs.statSync(filePath, ignore)

      if (stats.isDirectory()) {
        traverseDirectory(filePath, ignore)
      } else if (path.extname(file) === '.md') {
        const content = fs.readFileSync(filePath, 'utf8')
        markdownFiles.push({
          text: content,
          title: content.split('\n')[0].replace(TRIM_REGEX, ''),
          filename: file,
          path: filePath,
        })
      } else if (['.ts', '.js', '.css'].includes(path.extname(file))) {
        const content = fs.readFileSync(filePath, 'utf8')
        let title = path.basename(file)
        const docs = content.match(/\/\*![\s\S]+?\*\//g) || []
        if (docs.length) {
          const markdown = docs.map((s) => s.substring(3, s.length - 2).trim())
          const text = markdown.join('\n\n')
          markdownFiles.push({
            text,
            title: text.split('\n')[0].replace(TRIM_REGEX, ''),
            filename: file,
            path: filePath,
          })
        }
      }
    })
  }

  dirs.forEach((dir) => {
    traverseDirectory(dir, ignore)
  })

  return markdownFiles
}

function saveAsJSON(data, outputFilePath) {
  const jsonData = JSON.stringify(data, null, 2)
  fs.writeFileSync(outputFilePath, jsonData, 'utf8')
}

const ignore = ['node_modules', 'third-party', 'dist', 'www', 'docs']

// Specify the directories to search for markdown files
const directoriesToSearch = ['.']

// Find all markdown files in the specified directories
const markdownFiles = findMarkdownFiles(directoriesToSearch, ignore)

// Save the markdown files as JSON
saveAsJSON(markdownFiles, './demo/docs.json')
