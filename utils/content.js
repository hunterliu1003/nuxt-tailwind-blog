const fs = require('fs')
const path = require('path')
const markdownParser = require('./markdownParser')

const getMdFiles = dir =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file)
    const isDirectory = fs.statSync(name).isDirectory()
    return isDirectory
      ? [...files, ...getMdFiles(name)]
      : [
          ...files,
          {
            routePath: name.replace('content', '').replace(/\.[^/.]+$/, ''),
            path: name.replace('content/', '').replace(/\.[^/.]+$/, ''),
            ...markdownParser(fs.readFileSync('./' + name, 'utf8'))
          }
        ]
  }, [])

const content = getMdFiles('./content')

const getContent = () =>
  process.env.NODE_ENV === 'production' ? content : getMdFiles('./content')

const getPosts = () =>
  getContent().filter(page => page.path.startsWith('posts/'))

const getPostsRoutes = () => getPosts().map(post => post.routePath)

const getTagsCount = () =>
  getPosts().reduce((acc, cur) => {
    ;(cur.data.tags || []).forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {})

const getTagsRoutes = () =>
  Object.keys(getTagsCount()).map(tag => `/tags/${tag}`)

const getPostsByTag = tag =>
  getPosts()
    .filter(post => (post.data.tags || []).includes(tag))
    .map(post => post.routePath)

const getAllRoutes = () => [...getPostsRoutes(), ...getTagsRoutes()]

module.exports = {
  getMdFiles,
  getContent,
  getPosts,
  getPostsRoutes,
  getTagsCount,
  getTagsRoutes,
  getPostsByTag,
  getAllRoutes
}
