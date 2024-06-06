import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/reactivity',
      name: 'react',
      component: () => import('@/views/ReactivityFun.vue')
    },
    {
      path: '/custom',
      name: 'custom',
      component: () => import('@/views/ReactivityRebuild.vue')
    }
  ]
})

export default router
