<template lang="pug">
  div(v-once)
    HHeader
    HPost(:value="{ content, data }")
</template>

<script>
export default {
  asyncData(context) {
    if (process.static) {
      const { content, data } = require('~/plugins/pageParser')(
        require(`!!raw-loader!~/content/${context.route.meta[0].key.substring(
          2
        )}`).default
      )
      return { content, data }
    } else {
      return fetch(
        `${
          process.env.BASE_URL
        }/api/post?key=${context.route.meta[0].key.substring(2)}`,
        { method: 'GET' }
      ).then(res => res.json())
    }
  },
  head() {
    return {
      title: this.data.metaTitle,
      meta: this.data.meta
    }
  }
}
</script>
