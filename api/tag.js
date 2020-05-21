const { parse } = require('querystring')
const { getPostsByTag } = require('../utils/docs')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const postsRoutes = getPostsByTag(parse(req._parsedOriginalUrl.query).tag)
    if (postsRoutes.length > 0) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.write(JSON.stringify({ postsRoutes }))
      res.end()
    } else {
      res.writeHead(404)
      res.end()
    }
  }
}
