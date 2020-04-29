<template lang="pug">
  HMarkdown(v-once :value='content')
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$fetch(
      `/api/post?path=posts/${context.route.params.pathMatch}`
    )
  },
  head() {
    return {
      title: this.data.title,
      meta: this.data.meta
    }
  }
}
</script>
