<template lang="pug">
  main.max-w-3xl.mx-auto
    nuxt-link.block.m-4(v-for="post in postsRoutes" :key="post" :to="post") # {{ post }} 
</template>

<script>
export default {
  name: 'PageHome',
  asyncData(context) {
    return Object.freeze(context.app.$fetch('/api/posts'))
  }
}
</script>
