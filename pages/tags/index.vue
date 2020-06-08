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
  async asyncData({ $content, error }) {
    let tagsCount
    try {
      const tags = await $content('posts', { deep: true }).only(['tags']).fetch()
      tagsCount = tags.reduce((acc, cur) => {
        ;(cur.tags || []).forEach(tag => {
          acc[tag] = (acc[tag] || 0) + 1
        })
        return acc
      }, {})
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      tagsCount
    }
  }
}
</script>
