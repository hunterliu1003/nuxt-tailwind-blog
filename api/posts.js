const fs = require('fs')
const path = require('path')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const getAllFiles = dir =>
      fs.readdirSync(dir).reduce((files, file) => {
        const name = path.join(dir, file)
        const isDirectory = fs.statSync(name).isDirectory()
        return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name]
      }, [])
    res.end(JSON.stringify({ posts: getAllFiles('./content/') }))
  }
}
