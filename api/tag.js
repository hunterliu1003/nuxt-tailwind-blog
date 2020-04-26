const { parse } = require('querystring')
const { posts } = require('../utils/posts')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const tagsRoutes = posts
      .filter(post => {
        return (post.data.tags || []).includes(
          parse(req._parsedOriginalUrl.query).tag
        )
      })
      .map(post => post.routePath)
    res.end(JSON.stringify({ tags: tagsRoutes }))
  }
}
