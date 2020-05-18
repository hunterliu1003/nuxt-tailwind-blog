<template lang="pug">
  div
    .flex.flex-wrap.-mb-2.md_-mb-4
      HTag.block.mb-2.md_mb-4.mr-2.md_mr-4.last_mr-0(v-for="tag in tags" :key="tag" :tag="tag")
</template>

<script>
export default {
  name: 'HTags',
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>
