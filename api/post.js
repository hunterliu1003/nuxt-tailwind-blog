const { parse } = require('querystring')
const { getPosts } = require('../utils/content')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const post = getPosts().find(
      post => post.path === parse(req._parsedOriginalUrl.query).path
    )
    res.end(JSON.stringify(post))
  }
}
