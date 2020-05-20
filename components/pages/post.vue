<template lang="pug">
  article
    h1 {{ post.data.title }}
    p {{ $filter.getMMMDDYYYY(post.timestamp) }}
    HTags.my-4(:tags="post.data.tags")
    ul.flex.pb-5.border-b.border-light-border.dark_border-dark-border
      li
        HViewCounter
      li.ml-4 fb
      li.ml-4 vue-goodshare
      li.ml-auto
        HDisqusCommentCounter(shortname="hunterliu-blog")
    HMarkdown.mb-4(v-once :value="post.content")
    .flex.justify-between.my-12.pb-5.border-b.border-light-border.dark_border-dark-border
      NLink.prev-link(v-if="post.prevPost" to="/" :to="post.prevPost.routePath || ''") ← {{ post.prevPost.data.title }}
      .flex-grow
      NLink.next-link(v-if="post.nextPost" to="/" :to="post.nextPost.routePath || ''") {{ post.nextPost.data.title }} →
    HLazyDisqus(shortname="hunterliu-blog" :identifier="$route.fullPath")
    h2.mt-12 近期發文
    h3
      NLink.block.mt-4(:to="recentPost.routePath" v-for="recentPost in recentPostsRoutes" :key="recentPost.routePath")  {{ $filter.getMMMDDYYYY(recentPost.timestamp) }} - {{ recentPost.data.title }}
</template>

<script>
export default {
  name: 'PagePost',
  asyncData(context) {
    return Object.freeze(context.app.$fetch(context, `/api/post?path=posts/${context.route.params.pathMatch}`))
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.next-link,
.prev-link {
  @apply font-sans text-primary-dark;
}
.dark-mode {
  .next-link,
  .prev-link {
    @apply font-sans text-primary-base;
  }
}
</style>
