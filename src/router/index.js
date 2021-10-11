import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "Acerca de nosotros" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "Contactenos" */ '../views/Contact.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: () => import(/* webpackChunkName: "Proyectos" */ '../views/Proyectos.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Iniciar sesion" */ '../views/Login.vue')
  },
  {
    path: '/Recuperarcontrasena',
    name: 'Recuperar Contraseña',
    component: () => import(/* webpackChunkName: "Recuperar Contraseña" */ '../views/Recovery.vue')
  },
  {
    path: '/Register',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/Register.vue')
  },
  {
    path: '/Main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "Main" */ '../views/Main.vue'),
  },
  {
    path: '/Add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "Add" */ '../views/Add.vue'),
  }
  ,
  {
    path: '/Edit/:id',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "Edit" */ '../views/Edit.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
