const fs = require('fs')
const path = require('path')
const markdownParser = require('./markdownParser')

const getPosts = dir =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file)
    const isDirectory = fs.statSync(name).isDirectory()
    return isDirectory
      ? [...files, ...getPosts(name)]
      : [
          ...files,
          {
            routePath: name
              .replace('content', '/posts')
              .replace(/\.[^/.]+$/, ''),
            path: name.replace('content/', '').replace(/\.[^/.]+$/, ''),
            ...markdownParser(fs.readFileSync('./' + name, 'utf8'))
          }
        ]
  }, [])

const posts = getPosts('./content/')

const postsRoutes = posts.map(post => post.routePath)

const tagsCount = posts.reduce((acc, cur) => {
  ;(cur.data.tags || []).forEach(tag => {
    acc[tag] = (acc[tag] || 0) + 1
  })
  return acc
}, {})

const tagsRoutes = Object.keys(tagsCount).map(tag => `/tags/${tag}`)

const allRoutes = [...postsRoutes, ...tagsRoutes]

module.exports = {
  posts,
  postsRoutes,
  tagsCount,
  tagsRoutes,
  allRoutes
}
