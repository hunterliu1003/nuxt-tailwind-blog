<template lang="pug">
  section(class="mx-auto lg_px-8 pt-8 lg_border-l lg_border-r border-light-border dark_border-dark-border")
    HHeading 標籤：{{ $route.params.tag }}
    HPostList(:postList="posts")
</template>

<script>
export default {
  name: 'PageTag',
  async asyncData({ $content, error, route }) {
    let posts
    try {
      posts = await $content('posts', { deep: true })
        .only(['title', 'date', 'path', 'tags'])
        .where({
          tags: {
            $containsAny: [route.params.tag]
          }
        })
        .fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      posts
    }
  }
}
</script>
