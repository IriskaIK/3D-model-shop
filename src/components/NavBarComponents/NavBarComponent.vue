<template lang="">
      <v-navigation-drawer expand-on-hover rail :permanent='true' rounded='e-xl' >
        <!-- temporary='true' -->
        <v-list v-if='isAuth'>
          <NavBarAvatarComponent name="Your name" email='some@gmail.com' avatar='https://randomuser.me/api/portraits/men/85.jpg'></NavBarAvatarComponent>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <NavBarLink title='Home' value='home' icon='mdi-home' link='/'></NavBarLink>

          <NavBarLink title='Shop' value='shop' icon='mdi-shopping' link='/shop'></NavBarLink>

          <NavBarLink title='Cart' value='cart' icon='mdi-cart' link='/cart' :badge='isShowen'></NavBarLink>


          <div v-if='isAuth' >
            <NavBarLink title='Account' value='account' icon='mdi-account' link='/account'></NavBarLink>

            <NavBarLink title='Log out' value='logout' icon='mdi-logout' link='/logout'></NavBarLink>
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
<script>
import NavBarLink from './components/NavBarLink.vue';
import NavBarAvatarComponent from './components/NavBarAvatarComponent.vue';

import { useTheme } from "vuetify";

import { useCartStore } from '../../stores/cart';

export default {

  components: {
    NavBarLink,
    NavBarAvatarComponent
  },
  setup() {
    const theme = useTheme();
    const store = useCartStore()
    return { theme, store }
  },
  data() {
    return {
      isAuth: true,
      darkMode: true,
    }
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
      this.theme.global.name.value = this.darkMode ? "dark" : "light";
    }
  },
  computed:{
    isShowen(){
      console.log(this.store.getListLenght)
      if(this.store.getListLenght == 0){
        return false
      }
      console.log(1)

      return true
    }
  }
  

}

</script>
<style>
.bottom_controls {
  display: flex;
}
</style>