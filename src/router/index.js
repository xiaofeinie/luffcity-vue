import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Coures from '@/components/Coures'
import Login from '@/components/Login'
import Shopping_car from '@/components/Shopping_car'

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
    },
    {
      path: '/shopping_car',
      name: 'shopping_car',
      component: Shopping_car
    }
  ]
})
