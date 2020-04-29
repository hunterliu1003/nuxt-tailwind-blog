<template lang="pug">
  div
    nuxt-link.block.m-4(v-for="post in postsRoutes" :key="post" :to="post") # {{ post }} 
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$fetch('/api/posts')
  }
}
</script>
