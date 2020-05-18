<template lang="pug">
  section
    h1 {{ post.data.title }}
    p {{ $filter.getMMMDDYYYY(post.timestamp) }}
    HTags.my-4(:tags="post.data.tags")
    ul.flex
      li
        a(:href="`${href}#disqus_thread`") 0
        span  留言
      li.ml-4 fb
      li.ml-4 twitter
      li.ml-4
        client-only
          component(is="script" src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js" async) 
          span#busuanzi_container_page_pv
            span#busuanzi_value_page_pv 0
            |  瀏覽
    hr
    HMarkdown.mb-4(v-once :value="post.content")
    HTags(:tags="post.data.tags")
    hr
    .flex.justify-between.mb-12
      NLink(v-if="post.prevPost" to="/" :to="post.prevPost.routePath || ''") << {{ post.prevPost.data.title }}
      .flex-grow
      NLink(v-if="post.nextPost" to="/" :to="post.nextPost.routePath || ''") {{ post.nextPost.data.title }} >>
    client-only
      VueDisqus(shortname="hunterliu-blog" :identifier="$route.fullPath")
    h2.mt-12.mb-4 近期發文
    h3
      NLink.block(:to="recentPost.routePath" v-for="recentPost in recentPostsRoutes" :key="recentPost.routePath")  {{ $filter.getMMMDDYYYY(recentPost.timestamp) }} - {{ recentPost.data.title }}
</template>

<script>
import VueDisqus from 'vue-disqus/src/vue-disqus.vue'

export default {
  name: 'PagePost',
  components: {
    VueDisqus
  },
  asyncData(context) {
    return Object.freeze(context.app.$fetch(context, `/api/post?path=posts/${context.route.params.pathMatch}`))
  },
  data: () => ({
    href: ''
  }),
  watch: {
    '$colorMode.preference'() {
      setTimeout(() => {
        window.DISQUS && window.DISQUS.reset({ reload: true })
      }, 300)
    }
  },
  mounted() {
    this.href = window.location.href
    window.DISQUSWIDGETS && window.DISQUSWIDGETS.getCount({ reset: true })
  },
  head() {
    return {
      title: this.post.data.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.data.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.data.title },
        { hid: 'og:description', property: 'og:description', content: this.post.data.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        ...this.post.data.meta
      ],
      script: [{ src: 'https://hunterliu-blog.disqus.com/count.js', id: 'dsq-count-scr', async: true, body: true }]
    }
  }
}
</script>
