<template lang="pug">
  section
    h1 標籤列表
    NLink.block.mt-4(v-for="(tag, tagName) in tagsCount" :key="tag" :to="`tags/${tagName}`") # {{ tagName }} : {{ tag }}
</template>

<script>
export default {
  name: 'PageTags',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(context, '/api/tags'))
  }
}
</script>
