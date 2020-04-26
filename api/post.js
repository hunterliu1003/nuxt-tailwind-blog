const querystring = require('querystring')
const { allFiles } = require('../utils/files')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    const file = allFiles.find(
      file =>
        file.name ===
        'content/' + querystring.parse(req._parsedOriginalUrl.query).key + '.md'
    )
    res.end(JSON.stringify(file))
  }
}
