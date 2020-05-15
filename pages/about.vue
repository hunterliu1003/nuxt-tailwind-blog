<template lang="pug">
  main
    HMarkdown(v-once :value="content")
</template>

<script>
export default {
  name: 'PageAbout',
  asyncData(context) {
    return context.app.$fetch(context, '/api/content?path=about')
  },
  head() {
    return {
      title: this.data.title
    }
  }
}
</script>
