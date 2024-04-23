import { createRouter, createWebHistory } from 'vue-router'
import Validering from '../views/Validering.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Validering
    },
  ]
})

export default router
