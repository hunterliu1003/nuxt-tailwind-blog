<template lang="pug">
  main
    h1 {{ post.data.title }}
    HTags(:tags="post.data.tags")
    HMarkdown(v-once :value="post.content")
    HTags(:tags="post.data.tags")
    .flex.justify-between.mt-4
      nuxt-link(v-if="post.prevPost" to="/" :to="post.prevPost.routePath || ''") << {{ post.prevPost.data.title }}
      .flex-grow
      nuxt-link(v-if="post.nextPost" to="/" :to="post.nextPost.routePath || ''") {{ post.nextPost.data.title }} >>
    client-only
      VueDisqus(shortname="hunterliu-blog" :identifier="$route.fullPath")
    h2.mt-4 近期發文
    h3
      nuxt-link.block(:to="recentPost.routePath" v-for="recentPost in recentPostsRoutes" :key="recentPost.routePath") {{ recentPost.data.title }} {{ recentPost.timestamp }}
</template>

<script>
import Vue from 'vue'
import VueDisqus from 'vue-disqus'

Vue.use(VueDisqus)

export default {
  name: 'PagePost',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(`/api/post?path=posts/${context.route.params.pathMatch}`))
  },
  head() {
    return {
      title: this.post.data.title,
      meta: this.post.data.meta
    }
  }
}
</script>
