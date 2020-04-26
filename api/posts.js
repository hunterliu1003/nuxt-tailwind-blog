const { posts } = require('../utils/posts')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    res.end(
      JSON.stringify({
        posts: posts.map(post =>
          post.name.replace('content', '/posts').replace(/\.[^/.]+$/, '')
        )
      })
    )
  }
}
