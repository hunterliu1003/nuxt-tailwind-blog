<template lang="pug">
  .flex.flex-wrap-reverse
    div(class="w-full lg_w-4/5 lg_px-8 lg_border-l lg_border-r border-light-border dark_border-dark-border")
      article.pt-8
        HHeading.mb-4 {{ doc.title }}
        p {{ $f.getMMMDDYYYY(doc.date) }}
        //- p {{ $f.getMMMDDYYYY(doc.updatedAt) }}
        HTags.my-4(:tags="doc.tags")
        ul.flex.pb-5.border-b.border-light-border.dark_border-dark-border
          li
            HViewCounter
          //- li.ml-4 fb
          //- li.ml-4 vue-goodshare
          li.ml-auto
            HDisqusCommentCounter(shortname="hunterliu-blog")
        nuxt-content.my-4(:document="doc")
        .flex.justify-between.flex-wrap.my-10.pb-4.border-b.border-light-border.dark_border-dark-border
          NLink.prev-link(v-if="prev" :to="prev.path") ← {{ prev.title }}
          .flex-grow
          NLink.next-link.ml-auto(v-if="next" :to="next.path") {{ next.title }} →
        HLazyDisqus(shortname="hunterliu-blog" :identifier="$route.fullPath")
        HHeading(tag="h2").mt-12 近期發文
        HPostList.mt-4(headingTag="h3" :postList="recent")
    ArticleToc(v-if="doc.toc && doc.toc.length" :toc="doc.toc")
</template>

<script>
export default {
  name: 'PagePost',
  async asyncData({ $content, params, error }) {
    const { slug, year, month, day } = params
    let doc
    let recent
    let prev
    let next
    try {
      doc = await $content(`posts/${year}/${month}/${day}/${slug}`).fetch()
      recent = await $content('posts', { deep: true })
        .only(['title', 'date', 'path', 'tags'])
        .sortBy('path', 'desc')
        .limit(3)
        .fetch()
      const surround = await $content('posts', { deep: true })
        .only(['title', 'date', 'path'])
        .sortBy('path', 'desc')
        .surround(slug, { before: 1, after: 1 })
        .fetch()
      prev = surround[0]
      next = surround[1]
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      doc,
      recent,
      prev,
      next
    }
  },
  head() {
    return {
      title: this.doc.title,
      meta: [
        { hid: 'description', name: 'description', content: this.doc.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.doc.title },
        { hid: 'og:description', property: 'og:description', content: this.doc.description },
        { hid: 'og:type', property: 'og:type', content: 'article' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.next-link,
.prev-link {
  @apply py-2 font-sans text-primary-dark whitespace-pre-line text-xl;
}
.dark-mode {
  .next-link,
  .prev-link {
    @apply font-sans text-primary-base;
  }
}
</style>
