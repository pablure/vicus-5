import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //{
    //path: '/about',
    //name: 'about',
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //},
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registrate',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registrate.vue')
  },
  {
    path: '/:id',
    name: 'Logueado',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logueado.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
