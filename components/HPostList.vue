<template lang="pug">
  div
    NLink.flex.items-center.py-4.leading-none(v-for="post in postList" :key="post.routePath" :to="post.routePath")
      component(:is="headingTag").mr-auto.font-normal {{ post.data.title }}
      span.pl-2.text-right.text-xs.whitespace-no-wrap {{ $filter.getMMMDDYYYY(post.timestamp) }}
</template>

<script>
export default {
  name: 'HPostList',
  props: {
    headingTag: {
      type: String,
      default: 'h2'
    },
    postList: {
      type: Array,
      required: true
    }
  }
}
</script>
