import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from './views/HomeView.vue'

// Явная типизация массива маршрутов
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // Ленивая загрузка компонента
  //   component: () => import('../views/AboutView.vue')
  // },
  // {
  //   path: '/user/:id',
  //   name: 'user-profile',
  //   component: () => import('../views/UserProfile.vue'),
  //   // Типизация мета-полей (подробнее в шаге 4)
  //   meta: { requiresAuth: true }
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
