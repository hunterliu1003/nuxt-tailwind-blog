<template lang="pug">
  section
    HHeading 文章列表
    HPostList.mt-8(:postList="posts")
</template>

<script>
export default {
  name: 'PagePosts',
  async asyncData({ $content, error }) {
    let posts
    try {
      posts = await $content('posts').only(['slug', 'title', 'date']).sortBy('desc').fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      posts
    }
  }
}
</script>
