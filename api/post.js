const { parse } = require('querystring')
const { getPosts, getRecentPostsRoutes } = require('../utils/content')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const post = getPosts().find(
      post => post.path === parse(req._parsedOriginalUrl.query).path
    )
    const recentPostsRoutes = getRecentPostsRoutes(post)
    res.end(JSON.stringify({ post, recentPostsRoutes }))
  }
}
