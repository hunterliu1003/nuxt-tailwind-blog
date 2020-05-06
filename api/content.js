const { parse } = require('querystring')
const { getContent } = require('../utils/content')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const pageContent = getContent().find(pageContent => pageContent.path === parse(req._parsedOriginalUrl.query).path)
    if (pageContent) {
      res.writeHead(200)
      res.end(JSON.stringify(pageContent))
    } else {
      res.writeHead(404)
      res.end()
    }
  }
}
