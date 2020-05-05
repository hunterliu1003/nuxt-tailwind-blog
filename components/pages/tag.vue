<template lang="pug">
  main
    h1 {{ $route.params.tag }}
    h2(v-for="post in postsRoutes")
      nuxt-link(:to="post.routePath") {{ post.data.title }} {{ post.timestamp }}
</template>

<script>
export default {
  name: 'PageTag',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(`/api/tag?tag=${context.route.params.tag}`))
  }
}
</script>
