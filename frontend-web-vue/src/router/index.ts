import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserDetalle from '../views/UserDetalle.vue'
import PersonaView from '../views/PersonaView.vue'
import PersonaDetalle from '../views/PersonaDetalle.vue'
import PersonaEditar from '../views/PersonaEditar.vue'
import PersonaCrear from '../views/PersonaCrear.vue'
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
    { 
      path: '/personas', 
      name: 'personas', 
      component: PersonaView 
    },
    { 
      path: '/persona/:id', 
      name: 'personaDetalle', 
      component: PersonaDetalle, 
      props: true 
    },
    { 
      path: '/persona/crear', 
      name: 'personaCrear', 
      component: PersonaCrear 
    },
    { 
      path: '/persona/editar/:id', 
      name: 'personaEditar', 
      component: PersonaEditar, 
      props: true 
    },

  ],
})

export default router
