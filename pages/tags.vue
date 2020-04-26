<template lang="pug">
  div 
    h1 標籤列表
    h2(v-for='(tag, tagName) in tags') {{ tagName }} : {{ tag }}

</template>

<script>
export default {
  asyncData(context) {
    return fetch(`${process.env.BASE_URL}/api/tags`, {
      method: 'GET'
    }).then(res => res.json())
  }
}
</script>
