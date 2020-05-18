<template lang="pug">
  section
    h1 {{ $route.params.tag }}
    NLink.block.mt-4(v-for="post in postsRoutes" :key="post.routePath" :to="post.routePath") # {{ $filter.getMMMDDYYYY(post.timestamp) }} - {{ post.data.title }}
</template>

<script>
export default {
  name: 'PageTag',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(context, `/api/tag?tag=${context.route.params.tag}`))
  }
}
</script>
