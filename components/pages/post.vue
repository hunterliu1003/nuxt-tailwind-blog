<template lang="pug">
  main
    h1 {{ post.data.title }}
    HTags(:tags="post.data.tags")
    HMarkdown(v-once :value="post.content")
    HTags(:tags="post.data.tags")
    .flex.justify-between
      nuxt-link(to="/" :class="{ 'text-red-500': !post.prevPostPath}" :disabled="!post.prevPostPath" :to="post.prevPostPath || ''") << post name
      nuxt-link(to="/" :class="{ 'text-red-500': !post.nextPostPath}" :disabled="!post.nextPostPath" :to="post.nextPostPath || ''") post name >>
    //- vue-discus component
    h2.mt-4 近期發文
    h3
      nuxt-link.block(:to="recentPostPath" v-for="recentPostPath in recentPostsRoutes" :key="recentPostPath") {{ recentPostPath }} should be post name with Date
    //- ads
</template>

<script>
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
