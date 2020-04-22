import Vue from 'vue'
import VueRouter from 'vue-router'
import templateOne from "@/views/templateOne"
import templateTwo from "@/views/templateTwo"
import templateThree from "@/views/templateThree"
import admin from "@/views/admin"

Vue.use(VueRouter)

const routes = [
  {
    path: '/tpl/1/title/:title',
    name: '1',
    component: templateOne
  },
  {
    path: '/tpl/2/title/:title',
    name: '2',
    component: templateTwo
  },
  {
    path: '/tpl/3/title/:title',
    name: '3',
    component: templateThree
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/',
    name: 'home',
    redirect: to => {
      return {path: "/tpl/" + Math.floor(Math.random() * (4 - 1) + 1) + "/title/" + Math.floor(Math.random() * (6 - 1) + 1)}
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
