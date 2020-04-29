<template lang="pug">
  HMarkdown(v-once :value="content")
</template>

<script>
export default {
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
