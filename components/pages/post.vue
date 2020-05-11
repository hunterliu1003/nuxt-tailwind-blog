<template lang="pug">
  main
    h1 {{ post.data.title }}
    p {{ $filter.getMMMDDYYYY(post.timestamp) }}
    HTags.my-4(:tags="post.data.tags")
    ul.flex
      li
        a(:href="`${href}#disqus_thread`") 0 留言
      li.ml-4 fb
      li.ml-4 twitter
    hr
    HMarkdown.mb-4(v-once :value="post.content")
    HTags(:tags="post.data.tags")
    hr
    .flex.justify-between.mb-12
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
  data: () => ({
    href: ''
  }),
  watch: {
    '$colorMode.preference'() {
      window.DISQUS && window.DISQUS.reset({ reload: true })
    }
  },
  mounted() {
    this.href = window.location.href
  },
  head() {
    return {
      title: this.post.data.title,
      meta: this.post.data.meta,
      script: [{ src: 'https://hunterliu-blog.disqus.com/count.js', id: 'dsq-count-scr', async: true, body: true }]
    }
  }
}
</script>
