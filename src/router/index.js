import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Account from '../views/Account.vue'
import Shop from '../views/Shop.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: Home, name:'home'},
    {path: '/shop', component: Shop, name:'shop'},
    {path: '/cart', component: Cart, name:'cart'},
    {path: '/account', component: Account, name:'account'},
    {path: '/login', component: Login, name:'login'},
    {path: '/register', component:  Register, name : 'register'},
    {path: '/product/:id', component: '', name:'some4'}

  ]
})

export default router
