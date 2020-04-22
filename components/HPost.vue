<template lang="pug">
  div
    HMarkdown(:value='value.content')
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>
