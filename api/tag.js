const querystring = require('querystring')
const { posts } = require('../utils/posts')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const tagsRoutes = posts
      .filter(post => {
        return (post.data.tags || []).includes(
          querystring.parse(req._parsedOriginalUrl.query).tag
        )
      })
      .map(post =>
        post.name.replace('content', '/posts').replace(/\.[^/.]+$/, '')
      )
    res.end(JSON.stringify({ tags: tagsRoutes }))
  }
}
