import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    mode: 'history',
    scrollBehavior() {
      return { x: 0, y: 0 }
    },
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('~/pages/posts').then(m => m.default || m)
      },
      {
        path: '/posts',
        name: 'posts',
        component: () => import('~/pages/posts').then(m => m.default || m)
      },
      {
        path: '/posts/*',
        name: 'post',
        component: () => import('~/components/pages/post').then(m => m.default || m)
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
      {
        path: '/tags/:tag',
        name: 'tag',
        component: () => import('~/components/pages/tag').then(m => m.default || m)
      }
    ]
  })
  return router
}
