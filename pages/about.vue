<template lang="pug">
  HMarkdown.max-w-3xl.mx-auto(v-once :value="content")
</template>

<script>
export default {
  name: 'PageAbout',
  asyncData(context) {
    return context.app.$fetch('/api/content?path=about')
  },
  head() {
    return {
      title: this.data.title
    }
  }
}
</script>
