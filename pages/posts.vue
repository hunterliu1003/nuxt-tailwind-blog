<template lang="pug">
  section
    h1 文章列表
    HPostList(:postList="postsRoutes")
</template>

<script>
export default {
  name: 'PagePosts',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(context, '/api/posts'))
  }
}
</script>
