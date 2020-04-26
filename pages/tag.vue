<template lang="pug">
  div 
    h1 {{ $route.params.tag }}
    h2(v-for='tag in tags')
      nuxt-link(:to='tag') {{ tag }}
</template>

<script>
export default {
  asyncData(context) {
    return fetch(
      `${process.env.BASE_URL}/api/tag?tag=${context.route.params.tag}`,
      {
        method: 'GET'
      }
    ).then(res => res.json())
  }
}
</script>
