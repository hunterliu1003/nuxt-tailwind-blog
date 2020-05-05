import Vue from 'vue'
import NuxtJsonld from 'nuxt-jsonld'

Vue.use(NuxtJsonld)

// you can set the indentation
Vue.use(NuxtJsonld, {
  space: process.env.NODE_ENV === 'production' ? 0 : 2 // default: 2
})
