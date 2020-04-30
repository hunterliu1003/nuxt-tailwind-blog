<template lang="pug">
  .max-w-3xl.mx-auto
    h1 標籤列表
    h2(v-for="(tag, tagName) in tagsCount") 
      nuxt-link(:to="`tags/${tagName}`") {{ tagName }} : {{ tag }}

</template>

<script>
export default {
  name: 'PageTags',
  asyncData(context) {
    return Object.freeze(context.app.$fetch('/api/tags'))
  }
}
</script>
