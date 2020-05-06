const { parse } = require('querystring')
const { getPosts, getRecentPostsRoutes } = require('../utils/content')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const post = getPosts().find(post => post.path === parse(req._parsedOriginalUrl.query).path)
    if (post) {
      res.writeHead(200)
      const recentPostsRoutes = getRecentPostsRoutes(post)
      res.end(JSON.stringify({ post, recentPostsRoutes }))
    } else {
      res.writeHead(404)
      res.end()
    }
  }
}
