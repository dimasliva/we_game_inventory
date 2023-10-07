import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import InventoryView from '@/views/InventoryView.vue'
import AdminItemsView from '@/views/admin/AdminItemsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: InventoryView
    },
    {
      path: '/admin/items',
      name: 'adminitems',
      component: AdminItemsView
    }
  ]
})

export default router
