<template lang="pug">
  section
    h1 標籤列表
    h2(v-for="(tag, tagName) in tagsCount") 
      NLink(:to="`tags/${tagName}`") {{ tagName }} : {{ tag }}
</template>

<script>
export default {
  name: 'PageTags',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(context, '/api/tags'))
  }
}
</script>
