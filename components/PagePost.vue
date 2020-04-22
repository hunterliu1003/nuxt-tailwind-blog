<template lang="pug">
  div(v-once)
    HHeader
    nuxt-link.m-4(to='/') home
    HPost(:value="{ content, data }")
</template>

<script>
import axios from 'axios'

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
      return axios({
        url: process.env.BASE_URL + '/api',
        method: 'GET',
        params: {
          key: context.route.meta[0].key.substring(2)
        }
      }).then(res => res.data)
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
