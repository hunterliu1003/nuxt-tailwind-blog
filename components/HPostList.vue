<template lang="pug">
  div
    NLink.block.mt-4(v-for="post in postList" :key="post.routePath" :to="post.routePath") # {{ $filter.getMMMDDYYYY(post.timestamp) }} - {{ post.data.title }}
</template>

<script>
export default {
  name: 'HPostList',
  props: {
    postList: {
      type: Array,
      required: true
    }
  }
}
</script>
