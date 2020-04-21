<template lang="pug">
  div(v-once)
    HHeader
    HPost(:value="require('gray-matter')(require(`!!raw-loader!~/content/${$router.currentRoute.meta.key.substring(2)}`).default)")
</template>

<script>
export default {
  head() {
    const post = require('gray-matter')(
      require(`!!raw-loader!~/content/${this.$router.currentRoute.meta.key.substring(
        2
      )}`).default
    )
    return {
      title: post.data.metaTitle,
      meta: post.data.meta
    }
  }
}
</script>
