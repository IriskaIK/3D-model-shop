<script >
  import {useProductsStore} from "@/stores/products";
  import {getShopProducts} from "@/services/shop/getShopProducts";


  export default {
    setup() {
      const productsStore = useProductsStore()


      return {productsStore}
    },
    data(){
      return{}

    },
    methods:{
      async searchProducts(){
        await getShopProducts(this.productsStore.getOptionsData)


      }
    }
  }
</script>

<template>
  <v-btn
      class="me-4"
      ripple
      color="success"
      @click='this.searchProducts()'
  >
    Search
  </v-btn>
</template>

<style>

</style>