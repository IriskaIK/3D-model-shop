<template>
  <v-app>
    <v-layout>
      <NavBarComponent></NavBarComponent>

      <v-main style="height: 100vh" :scrollable="true">
        <v-container class="container-margin">
          <router-view v-slot="{ Component, route  }">
            <transition name="slide" mode="out-in">
              <div :key="route">
                <component :is="Component" />
              </div>
              
            </transition>
          </router-view>

          
          
          <!-- <router-view>
          </router-view> -->

        </v-container>
      </v-main>
    
    </v-layout>
  </v-app>


  
</template>
<script>
import NavBarComponent from "@/components/NavBarComponents/NavBarComponent.vue";
export default {
  name:'App',
  components:{
    NavBarComponent
  },
  data() {
    return {
      theme:'dark'
    }
  },

  
}
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active{
  transition: opacity .4s, transform .5s;
}
.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-50%);
}
.container-margin{
  margin-bottom: 100px;
}



</style>