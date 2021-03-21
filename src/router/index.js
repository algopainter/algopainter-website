import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [{
  path: '/',
  component: () => import(/* webpackChunkName: "layout-default" */ '@/layouts/SimpleLayout.vue'),
  children: [{
    path: '',
    name: 'home',
    component: () => import(/* webpackChunkName: "starter-page" */ '@/pages/StarterPage.vue')
  }
  ]
}]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
