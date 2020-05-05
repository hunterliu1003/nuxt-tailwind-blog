const { parse } = require('querystring')
const { getPostsByTag } = require('../utils/content')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    res.end(
      JSON.stringify({
        postsRoutes: getPostsByTag(parse(req._parsedOriginalUrl.query).tag)
      })
    )
  }
}
