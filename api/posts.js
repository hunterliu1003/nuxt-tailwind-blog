const { allFiles } = require('../utils/files')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    res.end(
      JSON.stringify({
        posts: allFiles.map(file =>
          file.name.replace('content', 'posts').replace(/\.[^/.]+$/, '')
        )
      })
    )
  }
}
