<template lang="pug">
	div(v-html="$md.render(value)")
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>
