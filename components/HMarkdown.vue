<template lang="pug">
	div(v-once v-html="value")
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
