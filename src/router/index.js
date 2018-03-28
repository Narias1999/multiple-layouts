import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/views/Login'
import Register from '@/components/views/Register'
import Principal from '@/components/views/Principal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/principal',
      name: 'Principal',
      component: Principal
    }
  ]
})
