<template lang="pug">
  section(class="lg_w-3/5 mx-auto lg_px-8")
    HHeading 標籤：{{ $route.params.tag }}
    HPostList.mt-8(:postList="posts")
</template>

<script>
export default {
  name: 'PageTag',
  async asyncData({ $content, error, route }) {
    let posts
    try {
      posts = await $content('posts', { deep: true })
        .only(['title', 'date', 'path'])
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
