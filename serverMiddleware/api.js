const post = require('../api/post')
const posts = require('../api/posts')

module.exports = function (req, res, next) {
  switch (req._parsedOriginalUrl.pathname) {
    case '/api/post':
      post(req, res, next)
      break
    case '/api/posts':
      posts(req, res, next)
      break
  }
}
