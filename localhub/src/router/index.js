import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import PlaceView from '@/views/PlaceView.vue'
import BoardView from '@/views/BoardView.vue'
import PlaceDetailView from "@/views/PlaceDetailView.vue";
import BoardWriteView from "@/views/BoardWriteView.vue";
import BoardDetailView from "@/views/BoardDetailView.vue";
import BoardEditView from "@/views/BoardEditView.vue";

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
    {
      path:"/place/:id",
      name:"PlaceDetail",
      component:PlaceDetailView
    },
    {
      path:"/board/write",
      component:BoardWriteView
    },

    {
      path:"/board/:id",
      component:BoardDetailView
    },
    {
      path: "/board/edit/:id",
      component: BoardEditView
    }
  ],
})

export default router
