import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { useAccountStore } from '@/stores/account'
import { isAuthenticated } from '@/services/auth/isAuth'
import AccountView from '@/views/AccountView.vue'
import { useCartStore } from '@/stores/cart'
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { useProductsStore } from '@/stores/products'
import ShopView from '@/views/ShopView.vue'
import { useWishlistStore } from '@/stores/wishlist'
import CartView from '@/views/CartView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      beforeEnter : [getCartData]
    },
    {
      path : '/account',
      name : "Account",
      component: AccountView,
      beforeEnter : [getCartData, getWishListData]
    },
    {
      path : '/login',
      name : "Login",
      component: LoginView
    },
    {
      path : '/register',
      name : "Register",
      component: RegisterView
    },
    {
      path : '/shop',
      name : "Shop",
      component : ShopView,
      beforeEnter : [getShopData, getCartData, getWishListData]
    },
    {
      path : '/cart',
      name : "Cart",
      component: CartView,
      beforeEnter : [getCartData]
    }
  ]
})

const guardedRoutes = [
  'Cart',
  'Account',
]

router.beforeEach(async (to, from, next)=>{
  const auth = await isAuthenticated()

  const store = useAccountStore()
  if(auth == null){
    store.isAuthenticated = false;
    if (to.name && typeof to.name === 'string' && guardedRoutes.includes(to.name)) {
      next({ name: 'Login' });
      return;
    }
    next()
  }else{
    store.setUserData(auth)
    store.isAuthenticated = true;
    next()
  }

})


async function getShopData(to : RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext){
  const store = useProductsStore()
  await store.fetchProducts()
  await store.fetchTags()
  await store.fetchCategories()

  next()
}

async function getCartData(to : RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext){
  const store = useCartStore()
  await store.loadCartItems()
  next()
}

async function getWishListData(to : RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext){
  const store = useWishlistStore()
  await store.loadWishlist()
  next()
}

export default router
