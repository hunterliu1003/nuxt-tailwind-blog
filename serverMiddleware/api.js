const post = require('../api/post')
const posts = require('../api/posts')
const tags = require('../api/tags')
const tag = require('../api/tag')

module.exports = function (req, res, next) {
  switch (req._parsedOriginalUrl.pathname) {
    case '/api/post':
      post(req, res, next)
      break
    case '/api/posts':
      posts(req, res, next)
      break
    case '/api/tags':
      tags(req, res, next)
      break
    case '/api/tag':
      tag(req, res, next)
      break
  }
}
