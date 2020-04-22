const matter = require('gray-matter')
const MarkdownIt = require('markdown-it')
const makdownItAttrs = require('markdown-it-attrs')
const markdownItPlayground = require('markdown-it-playground')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItPrism = require('../plugins/markdown-it/markdownItPrism')
  .default

const md = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: true,
  typographer: true
})

md.use(makdownItAttrs, {
  leftDelimiter: '{{',
  rightDelimiter: '}}'
})
  .use(markdownItPlayground)
  .use(markdownItAnchor, {
    level: 1,
    permalink: true,
    permalinkClass: 'md-anchor',
    permalinkSymbol: '#',
    permalinkBefore: true
  })
  .use(markdownItPrism)

module.exports = file => {
  const { content, data } = matter(file)
  return { content: md.render(content), data }
}
