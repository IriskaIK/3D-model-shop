<script >

import {useProductsStore} from "@/stores/products";

export default {
  setup() {
    const productsStore = useProductsStore()
    return { productsStore}
  },
  data(){
    return{
      ranOutOfStock : this.productsStore.getStockState,
      additionalCheckbox : false
    }
  },
  watch:{
    'ranOutOfStock'(){
      this.productsStore.setStockState(this.ranOutOfStock)
    },

  }
}

</script>

<template>
  <v-checkbox v-model='this.ranOutOfStock' label="Display product, that ran out of stock"></v-checkbox>
  <v-checkbox v-model='this.additionalCheckbox' label="Additional checkbox"></v-checkbox>
</template>

<style scoped>

</style>