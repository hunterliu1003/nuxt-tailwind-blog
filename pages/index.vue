<template lang="pug">
  div
    HHeader
    no-ssr
      codemirror(v-model='post.content' :options='codemirrorOptions')
    HPost(:value="post")
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
