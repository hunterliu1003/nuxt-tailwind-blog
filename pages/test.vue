<template>
  <div>
    <no-ssr>
      <codemirror v-model="post.content" :options="codemirrorOptions" />
    </no-ssr>
    <h1>{{ post.data.title }}</h1>
    <div v-html="$md.render(post.content)"></div>
  </div>
</template>

<script>
import matter from 'gray-matter'

export default {
  asyncData(context) {
    const resolve = require.context('!!raw-loader!~/content/', true, /\.md$/)
    const imports = resolve.keys().map(key => {
      const { content, data } = matter(resolve(key).default)
      return { content, data }
    })
    return {
      post: imports[0],
      codemirrorOptions: {
        tabSize: 2,
        mode: 'markdown',
        theme: 'monokai',
        lineNumbers: true,
        lineWrapping: true
      }
    }
  }
}
</script>
