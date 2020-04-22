const fs = require('fs')
const querystring = require('querystring')
const pageParser = require('../plugins/pageParser')

export default function (req, res, next) {
  const file = fs.readFileSync(
    `./content/${querystring.parse(req._parsedOriginalUrl.query).key}`,
    'utf8'
  )
  res.end(JSON.stringify(pageParser(file)))
}
