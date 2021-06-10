import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './home.routes'

const routes: Array<RouteRecordRaw> = [Home]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
