const { parse } = require('querystring')
const { posts } = require('../utils/posts')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const post = posts.find(
      post => post.path === parse(req._parsedOriginalUrl.query).key
    )
    res.end(JSON.stringify(post))
  }
}
