<template lang="pug">
  section
    HHeading 文章列表
    HPostList.mt-8(:postList="postsRoutes")
</template>

<script>
export default {
  name: 'PagePosts',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(context, '/api/posts'))
  }
}
</script>
