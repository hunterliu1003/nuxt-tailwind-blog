const { getPostsRoutes } = require('../utils/content')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify({ postsRoutes: getPostsRoutes() }))
    res.end()
  }
}
