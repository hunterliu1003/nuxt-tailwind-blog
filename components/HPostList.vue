<template lang="pug">
  ul
    li.py-6.border-b.border-light-border.dark_border-dark-border.last_border-0(v-for="post in postList" :key="post.path")
      NLink.leading-none(:to="post.path")
        component(:is="headingTag").font-normal.leading-normal {{ post.title }}
        span.block.my-4.text-sm.whitespace-no-wrap {{ $f.getMMMDDYYYY(post.date) }}
        p.mb-4 補上一些文章的簡介
      .flex.justify-between.items-end
        HTags(:tags="post.tags")
        NLink(:to="post.path").text-sm.p-1.border.rounded.whitespace-no-wrap 閱讀文章
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
