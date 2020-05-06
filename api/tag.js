const { parse } = require('querystring')
const { getPostsByTag } = require('../utils/content')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const postsRoutes = getPostsByTag(parse(req._parsedOriginalUrl.query).tag)
    if (postsRoutes.length > 0) {
      res.writeHead(200)
      res.end(JSON.stringify({ postsRoutes }))
    } else {
      res.writeHead(404)
      res.end()
    }
  }
}
