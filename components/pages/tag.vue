<template lang="pug">
  section
    HHeading 標籤：{{ $route.params.tag }}
    HPostList.mt-8(:postList="postsRoutes")
</template>

<script>
export default {
  name: 'PageTag',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(context, `/api/tag?tag=${context.route.params.tag}`))
  }
}
</script>
