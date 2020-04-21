<template lang="pug">
  div
    HHeader
    nuxt-link.m-4(to='posts/example_post') posts/example_post
    nuxt-link.m-4(to='posts/2020/04/14/example_post') posts/2020/04/14/example_post
    client-only
      codemirror(value='codemirror' :options='codemirrorOptions')

</template>

<script>
export default {
  asyncData(context) {
    return {
      codemirrorOptions: {
        tabSize: 2,
        mode: 'markdown',
        theme: 'monokai',
        lineNumbers: true,
        lineWrapping: true
      }
    }
  }
}
</script>
