<template lang="pug">
  HMarkdown(v-once :value='content')
</template>

<script>
export default {
  asyncData(context) {
    return fetch(
      `${process.env.BASE_URL}/api/post?key=${context.route.params.pathMatch}`,
      { method: 'GET' }
    ).then(res => res.json())
  },
  head() {
    return {
      title: this.data.metaTitle,
      meta: this.data.meta
    }
  }
}
</script>
