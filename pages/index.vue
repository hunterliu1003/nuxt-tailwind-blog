<template lang="pug">
  section(class="mx-auto lg_px-8 pt-8 lg_border-l lg_border-r border-light-border dark_border-dark-border")
    HHeading.mb-8 關於我
    nuxt-content(:document="doc")
</template>

<script>
export default {
  name: 'PageAbout',
  async asyncData({ $content }) {
    const doc = await $content('about').fetch()
    return {
      doc
    }
  },
  head() {
    return {
      title: this.doc.title,
      meta: [
        { hid: 'description', name: 'description', content: this.doc.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.doc.title },
        { hid: 'og:description', property: 'og:description', content: this.doc.description }
      ]
    }
  }
}
</script>
