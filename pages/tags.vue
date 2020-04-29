<template lang="pug">
  div 
    h1 標籤列表
    h2(v-for="(tag, tagName) in tagsCount") 
      nuxt-link(:to="`tags/${tagName}`") {{ tagName }} : {{ tag }}

</template>

<script>
export default {
  asyncData(context) {
    return context.app.$fetch('/api/tags')
  }
}
</script>
