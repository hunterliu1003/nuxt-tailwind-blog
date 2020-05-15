<template lang="pug">
  main
    NLink.block.m-4(v-for="post in postsRoutes" :key="post.routePath" :to="post.routePath") # {{ $filter.getMMMDDYYYY(post.timestamp) }} - {{ post.data.title }}
</template>

<script>
export default {
  name: 'PageHome',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(context, '/api/posts'))
  }
}
</script>
