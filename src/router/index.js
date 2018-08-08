import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Coures from '@/components/Coures'
import Login from '@/components/Login'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/coures',
      name: 'coures',
      component: Coures
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
