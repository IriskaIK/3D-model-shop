<script>
  import {useProductsStore} from "@/stores/products";

  export default {
    setup() {
      const productsStore = useProductsStore()
      return {productsStore}
    },
    methods:{
      clearAll(){
        this.productsStore.clearOptionsData()
        window.location.reload()
      }
    }
  }
</script>

<template>
  <v-btn ripple @click='this.clearAll()'>
    clear
  </v-btn>
</template>

<style>

</style>