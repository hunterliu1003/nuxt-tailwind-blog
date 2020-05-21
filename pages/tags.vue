<template lang="pug">
  section
    HHeading.mb-8 標籤列表
    NLink.flex.items-center.py-4.leading-none(v-for="(tag, tagName) in tagsCount" :key="tagName" :to="`tags/${tagName}`")
      h3.font-normal {{ tagName }} 
      span.-ml-3.text-xl.text-right &nbsp;: {{ tag }}
</template>

<script>
export default {
  name: 'PageTags',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(context, '/api/tags'))
  }
}
</script>
