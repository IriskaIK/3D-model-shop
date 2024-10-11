<script lang="ts">
import { defineComponent } from 'vue'
import { getShopProducts } from '@/services/shop/getShopProducts'
import { useProductsStore } from '@/stores/products'

export default defineComponent({
  name: 'SearchBtn',
  setup() {
    const productsStore = useProductsStore()


    return {productsStore}
  },
  data(){
    return{}

  },
  methods:{
    async searchProducts(){
      await this.productsStore.fetchProducts()
    }
  }
})
</script>

<template>
  <v-btn
    class="me-4"
    ripple
    color="success"
    @click='searchProducts()'
  >
    Search
  </v-btn>
</template>

<style scoped>

</style>