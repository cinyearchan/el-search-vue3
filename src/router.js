import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import Setup from '@/views/Setup'
import Store from '@/store'

const base = process.env.VUE_APP_PUBLIC_PATH || '/'

const modes = {
  history: createWebHistory,
  hash: createWebHashHistory,
  abstract: createMemoryHistory
}

const history = modes[process.env.VUE_APP_ROUTER_MODE]

const router = createRouter({
  history: history ? history(base) : modes.history('/'),
  base,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/setup',
      name: 'Setup',
      component: Setup,
      beforeEnter: (to, from, next) => {
        if (Store.state.connection.instances.length > 0) {
          next('/')
        } else {
          next()
        }
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!Store.state.connection.instances.length > 0 && to.name !== 'Setup') {
    next('setup')
  } else {
    next()
  }
})

export default router
