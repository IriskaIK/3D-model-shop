<script lang="ts">
import {defineComponent} from 'vue'
import {useAccountStore} from "@/stores/account";
import {useCartStore} from "@/stores/cart";
import {useTheme} from "vuetify";
import NavBarAvatar from "@/components/NavBarComponents/components/NavBarAvatar.vue";
import NavBarLink from "@/components/NavBarComponents/components/NavBarLink.vue";
import { logout } from '@/services/auth/logout'
import Product from '@/types/product.types'


export default defineComponent({
  name: "NavBarComponent",
  components: {NavBarLink, NavBarAvatar},
  setup(){
    const theme = useTheme();
    const cartStore = useCartStore()
    const accountStore = useAccountStore()
    return {theme, cartStore, accountStore}
  },
  data(){
    return {
      isAuth: false,
      darkMode: true,
    }
  },
  methods: {
    async logoutAndReload() : Promise<void>{
      await logout()
      this.$router.go(0)
      this.$router.push('/login')
    },
    toggleTheme() : void {
      this.darkMode = !this.darkMode
      this.theme.global.name.value = this.darkMode ? "dark" : "light";
    }
  },
  computed:{
    isShowen() : boolean{
      console.log(this.cartStore.getListLength !== 0)
      return this.cartStore.getListLength !== 0;

    }
  }
})
</script>

<template>
  <v-navigation-drawer location='right' expand-on-hover rail :permanent='true' rounded='s-xl'>
    <!-- temporary='true' -->
    <v-list v-if='accountStore.getUserAuthStatus'>
      <NavBarAvatar :name="accountStore.getFirstName" :email="accountStore.getEmail" avatar='https://randomuser.me/api/portraits/men/85.jpg'></NavBarAvatar>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <NavBarLink title='Home' value='home' icon='mdi-home' link='/'></NavBarLink>

      <NavBarLink title='Shop' value='shop' icon='mdi-shopping' link='/shop'></NavBarLink>




      <div v-if='accountStore.getUserAuthStatus' >
        <NavBarLink title='Cart' value='cart' icon='mdi-cart' link='/cart' :badge='isShowen'></NavBarLink>

        <NavBarLink title='Account' value='account' icon='mdi-account' link='/account'></NavBarLink>

        <NavBarLink title='Log out' value='logout' icon='mdi-logout' link='/login' @click="logoutAndReload()"></NavBarLink>
      </div>


      <div v-else>
        <NavBarLink title='Log in' value='login' icon='mdi-login' link='/login'></NavBarLink>
      </div>








    </v-list>
    <template v-slot:append>
      <div class="pa-2" @click="toggleTheme()">
        <v-btn block >
          <v-icon size="20" icon='mdi-theme-light-dark'></v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style scoped>

</style>