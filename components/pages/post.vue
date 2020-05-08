<template lang="pug">
  main
    h1 {{ post.data.title }}
    HTags.my-4(:tags="post.data.tags")
    HMarkdown(v-once :value="post.content")
    HTags.my-4(:tags="post.data.tags")
    .flex.justify-between.my-12
      nuxt-link(v-if="post.prevPost" to="/" :to="post.prevPost.routePath || ''") << {{ post.prevPost.data.title }}
      .flex-grow
      nuxt-link(v-if="post.nextPost" to="/" :to="post.nextPost.routePath || ''") {{ post.nextPost.data.title }} >>
    client-only
      VueDisqus(shortname="hunterliu-blog" :identifier="$route.fullPath")
    h2.mt-12.mb-4 近期發文
    h3
      nuxt-link.block(:to="recentPost.routePath" v-for="recentPost in recentPostsRoutes" :key="recentPost.routePath")  {{ $filter.getMMMDDYYYY(recentPost.timestamp) }} - {{ recentPost.data.title }}
</template>

<script>
import VueDisqus from 'vue-disqus/src/vue-disqus.vue'

export default {
  name: 'PagePost',
  components: {
    VueDisqus
  },
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
