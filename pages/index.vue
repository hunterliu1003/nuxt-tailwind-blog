<template lang="pug">
  div
    HHeader
    nuxt-link.block.m-4(v-for='post in posts' :to="post") # {{ post }} 
</template>

<script>
export default {
  asyncData(context) {
    if (process.static) {
      const resolve = require.context('!!raw-loader!~/content/', true, /\.md$/)
      const posts = resolve.keys().map(key => {
        return 'posts' + key.substring(1).replace(/\.[^/.]+$/, '')
      })
      return { posts }
    } else {
      return fetch(`${process.env.BASE_URL}/api/posts`, {
        method: 'GET'
      })
        .then(res => res.json())
        .then(res => ({
          posts: res.posts.map(post =>
            post.replace('content', 'posts').replace(/\.[^/.]+$/, '')
          )
        }))
    }
  }
}
</script>
