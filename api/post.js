const { parse } = require('querystring')
const { getPosts, getRecentPostsRoutes } = require('../utils/docs')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const post = getPosts().find(post => post.path === parse(req._parsedOriginalUrl.query).path)
    if (post) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      const recentPostsRoutes = getRecentPostsRoutes(post)
      res.write(JSON.stringify({ post, recentPostsRoutes }))
      res.end()
    } else {
      res.writeHead(404)
      res.end()
    }
  }
}
