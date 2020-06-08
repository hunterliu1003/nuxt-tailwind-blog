<template lang="pug">
  section(class="lg_w-3/5 mx-auto lg_px-8 pt-8 lg_border-l lg_border-r border-light-border dark_border-dark-border")
    HHeading 文章列表
    HPostList(:postList="posts")
</template>

<script>
export default {
  name: 'PagePosts',
  async asyncData({ $content, error }) {
    let posts
    try {
      posts = await $content('posts', { deep: true })
        .only(['title', 'date', 'path', 'tags'])
        .sortBy('path', 'desc')
        .fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      posts
    }
  }
}
</script>
