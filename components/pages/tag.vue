<template lang="pug">
  main
    h1 {{ $route.params.tag }}
    h2(v-for="post in postsRoutes")
      NLink(:to="post.routePath") # {{ $filter.getMMMDDYYYY(post.timestamp) }} - {{ post.data.title }}
</template>

<script>
export default {
  name: 'PageTag',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(context, `/api/tag?tag=${context.route.params.tag}`))
  }
}
</script>
