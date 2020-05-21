const { parse } = require('querystring')
const { getContent } = require('../utils/docs')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const pageContent = getContent().find(pageContent => pageContent.path === parse(req._parsedOriginalUrl.query).path)
    if (pageContent) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.write(JSON.stringify(pageContent))
      res.end()
    } else {
      res.writeHead(404)
      res.end()
    }
  }
}
