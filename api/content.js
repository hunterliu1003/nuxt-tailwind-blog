const { parse } = require('querystring')
const { content } = require('../utils/posts')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const pageContent = content.find(
      pageContent =>
        pageContent.path === parse(req._parsedOriginalUrl.query).path
    )
    res.end(JSON.stringify(pageContent))
  }
}
