const fs = require('fs')
const path = require('path')
const markdownParser = require('./markdownParser')

const getMdFiles = dir =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file)
    const isDirectory = fs.statSync(name).isDirectory()
    if (isDirectory) {
      return [...files, ...getMdFiles(name)]
    } else {
      const mdObject = markdownParser(fs.readFileSync('./' + name, 'utf8'))
      return [
        ...files,
        {
          name,
          routePath: name.replace('content', '').replace(/\.[^/.]+$/, ''),
          path: name.replace('content/', '').replace(/\.[^/.]+$/, ''),
          ...mdObject,
          timestamp: new Date(mdObject.data.date || null).getTime()
        }
      ]
    }
  }, [])

const getPostLinkInfo = ({ name, routePath, path, data, timestamp }) => ({
  name,
  routePath,
  path,
  data,
  timestamp
})

const content = getMdFiles('./content')

const getContent = () => (process.env.NODE_ENV === 'production' ? content : getMdFiles('./content'))

const getPosts = () =>
  getContent()
    .filter(page => page.path.startsWith('posts/'))
    .sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1))
    .map((post, index, posts) => ({
      ...post,
      prevPostPath: index - 1 >= 0 ? getPostLinkInfo(posts[index - 1]) : false,
      nextPostPath: index + 1 < posts.length ? getPostLinkInfo(posts[index + 1]) : false
    }))

const getPostsRoutes = () => getPosts().map(post => getPostLinkInfo(post))

const getTagsCount = () =>
  getPosts().reduce((acc, cur) => {
    ;(cur.data.tags || []).forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {})

const getTagsRoutes = () => Object.keys(getTagsCount()).map(tag => `/tags/${tag}`)

const getPostsByTag = tag =>
  getPosts()
    .filter(post => (post.data.tags || []).includes(tag))
    .map(post => getPostLinkInfo(post))

const getRecentPostsRoutes = post =>
  getPostsRoutes()
    .filter(routePath => routePath !== post.routePath)
    .slice(0, 3)

const getAllRoutes = () => [...getPostsRoutes(), ...getTagsRoutes()].map(postLinkInfo => postLinkInfo.routePath)

module.exports = {
  getMdFiles,
  getContent,
  getPosts,
  getPostsRoutes,
  getTagsCount,
  getTagsRoutes,
  getPostsByTag,
  getRecentPostsRoutes,
  getAllRoutes
}
