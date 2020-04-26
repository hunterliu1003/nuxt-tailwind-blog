const { tags } = require('../utils/posts')

module.exports = function (req, res, next) {
  if (req.method === 'GET') {
    res.end(
      JSON.stringify({
        tags
      })
    )
  }
}
