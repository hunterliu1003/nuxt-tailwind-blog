<template lang="pug">
  section
    h1 {{ $route.params.tag }}
    HPostList(:postList="postsRoutes")
</template>

<script>
export default {
  name: 'PageTag',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(context, `/api/tag?tag=${context.route.params.tag}`))
  }
}
</script>
