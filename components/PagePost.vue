<template lang="pug">
  div
    HHeader
    HPost(:value="post")
</template>

<script>
import matter from 'gray-matter'

export default {
  asyncData(context) {
    const markdown = require('!!raw-loader!~/content/' +
      context.route.meta[0].key.substring(2)).default
    const { content, data } = matter(markdown)
    return {
      post: { content, data }
    }
  },
  head() {
    return {
      title: this.post.data.metaTitle,
      meta: this.post.data.meta
    }
  }
}
</script>
