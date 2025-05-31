import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Capes from '../views/Capes.vue'
import Useful from '../views/UsefulPages.vue'
import Credits from '../views/Credits.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomeView,
    },
    {
      path: '/capes',
      name: 'Capes',
      component: Capes,
    },
    {
      path: '/useful_pages',
      name: 'Useful Pages',
      component: Useful,
    },
    {
      path: '/credits',
      name: 'Credits',
      component: Credits,
    }
  ],
})

export default router
