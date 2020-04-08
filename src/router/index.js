import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Inlet',
    name: 'Inlet',
    component: () => import('../views/Inlet.vue')
  },
  {
    path: '/Form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
]

const router = new VueRouter({
  base: '/ecm',
  routes
})

export default router
