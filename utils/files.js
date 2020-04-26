const fs = require('fs')
const path = require('path')
const pageParser = require('../plugins/pageParser')

const getAllFiles = dir =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file)
    const isDirectory = fs.statSync(name).isDirectory()
    return isDirectory
      ? [...files, ...getAllFiles(name)]
      : [
          ...files,
          { name, ...pageParser(fs.readFileSync('./' + name, 'utf8')) }
        ]
  }, [])

const allFiles = getAllFiles('./content/')

const postsRoutes = allFiles.map(file =>
  file.name.replace('content', 'posts').replace(/\.[^/.]+$/, '')
)

module.exports = { allFiles, postsRoutes }
