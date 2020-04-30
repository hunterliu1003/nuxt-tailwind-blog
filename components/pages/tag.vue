<template lang="pug">
  .max-w-3xl.mx-auto
    h1 {{ $route.params.tag }}
    h2(v-for="tag in tags")
      nuxt-link(:to="tag") {{ tag }}
</template>

<script>
export default {
  name: 'PageTag',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(`/api/tag?tag=${context.route.params.tag}`))
  }
}
</script>
