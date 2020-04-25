import Vue from 'vue'
import Router from 'vue-router'

const resolve = require.context('!!raw-loader!~/content/', true, /\.md$/)
const MarkDownRoutes = resolve.keys().map(key => {
  return {
    path: '/posts' + key.substring(1).replace(/\.[^/.]+$/, ''),
    name: key.substring(2).replace(/\.[^/.]+$/, ''),
    component: () => import('~/components/HPagePost').then(m => m.default || m),
    meta: { key }
  }
})

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('~/pages/index').then(m => m.default || m)
      },
      {
        path: '/posts',
        name: 'posts',
        component: () => import('~/pages/index').then(m => m.default || m)
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('~/pages/about').then(m => m.default || m)
      },
      {
        path: '/tags',
        name: 'tags',
        component: () => import('~/pages/tags').then(m => m.default || m)
      },
      ...MarkDownRoutes
    ]
  })
  return router
}
