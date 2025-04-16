import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserDetalle from '../views/UserDetalle.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/user/:id',
      name: 'usuario',
      component: UserDetalle,
      props: true
    },
  ],
})

export default router
