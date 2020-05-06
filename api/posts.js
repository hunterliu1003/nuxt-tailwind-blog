const { getPostsRoutes } = require('../utils/content')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    res.writeHead(200)
    res.end(JSON.stringify({ postsRoutes: getPostsRoutes() }))
  }
}
