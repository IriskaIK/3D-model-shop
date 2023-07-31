import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Account from '../views/Account.vue'
import Shop from '../views/Shop.vue'
import Login from '../views/Login.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: Home, name:'home'},
    {path: '/shop', component: Shop, name:'some'},
    {path: '/cart', component: Cart, name:'some1'},
    {path: '/account', component: Account, name:'some2'},
    {path: '/login', component: Login, name:'some3'},
    {path: '/product/:id', component: '', name:'some4'}

  ]
})

export default router
