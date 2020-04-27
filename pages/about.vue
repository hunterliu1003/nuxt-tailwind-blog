<template lang="pug">
  HMarkdown(v-once :value='content')
</template>

<script>
export default {
  asyncData(context) {
    return fetch(`${process.env.BASE_URL}/api/content?path=about`, {
      method: 'GET'
    }).then(res => res.json())
  },
  head() {
    return {
      title: this.data.title
    }
  }
}
</script>
