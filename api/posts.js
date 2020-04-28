const { getPostsRoutes } = require('../utils/content')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    res.end(JSON.stringify({ postsRoutes: getPostsRoutes() }))
  }
}
