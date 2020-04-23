import prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-json'
import escapeHtml from 'escape-html'

function wrap(code, lang) {
  if (lang === 'text') {
    code = escapeHtml(code)
  }
  return `<pre v-pre class="language-${lang}"><code>${code}</code></pre>`
}

const highlight = (str, lang) => {
  if (!lang) {
    return wrap(str, 'text')
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, lang)
  }
  return wrap(str, 'text')
}

const highlightjs = md => {
  md.options.highlight = highlight
}

export default highlightjs