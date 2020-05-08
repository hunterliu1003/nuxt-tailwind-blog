const matter = require('gray-matter')
const MarkdownIt = require('markdown-it')
const makdownItAttrs = require('markdown-it-attrs')
const markdownItPlayground = require('markdown-it-playground')
const markdownItAnchor = require('markdown-it-anchor')
const uslug = require('uslug')
const uslugify = s => uslug(s, { lower: false })
const markdownItPrism = require('./markdown-it/markdownItPrism')

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
    slugify: uslugify,
    level: 1,
    permalink: true,
    permalinkClass: 'header-anchor',
    permalinkSymbol: '#',
    permalinkBefore: true
  })
  .use(markdownItPrism)

module.exports = file => {
  const { content, data } = matter(file)
  return { content: md.render(content), data }
}
