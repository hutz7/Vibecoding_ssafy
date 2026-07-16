import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import PlaceView from '@/views/PlaceView.vue'
import BoardView from '@/views/BoardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/places',
      name: 'places',
      component: PlaceView,
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView,
    },
  ],
})

export default router
