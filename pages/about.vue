<template lang="pug">
  section
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
      title: this.data.title,
      meta: [
        { hid: 'description', name: 'description', content: this.data.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.data.title },
        { hid: 'og:description', property: 'og:description', content: this.data.description }
      ]
    }
  }
}
</script>
