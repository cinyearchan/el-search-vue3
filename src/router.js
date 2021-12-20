import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import Setup from '@/views/Setup'
import Nodes from '@/views/Nodes'
import Search from '@/views/Search'
import Document from '@/views/Document'
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
          // next('/')
          next()
        } else {
          next()
        }
      }
    },
    {
      path: '/nodes',
      name: 'Nodes',
      component: Nodes
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      props: true
    },
    {
      path: '/search/:index/:type?/:id',
      name: 'Document',
      component: Document
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!Store.state.connection.instances.length > 0 && to.name !== 'Setup') {
    // next('setup')
    next()
  } else {
    next()
  }
})

export default router
