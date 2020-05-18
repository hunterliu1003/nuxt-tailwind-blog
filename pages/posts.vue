<template lang="pug">
  section
    h1 文章列表
    NLink.block.mt-4(v-for="post in postsRoutes" :key="post.routePath" :to="post.routePath") # {{ $filter.getMMMDDYYYY(post.timestamp) }} - {{ post.data.title }}
</template>

<script>
export default {
  name: 'PagePosts',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(context, '/api/posts'))
  }
}
</script>
