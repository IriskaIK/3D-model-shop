<script>
import {useProductsStore} from "@/stores/products";

export default {
  setup() {
    const productsStore = useProductsStore()
    return { productsStore}
  },
  data(){
    return{
      sortBy : this.productsStore.getOrderByState,
    }
  },
  watch:{
    'sortBy'(){
      this.productsStore.setOrderOption(this.sortBy)
    }
  }
}
</script>

<template>
  <v-autocomplete
      chips
      label="Sort by"
      :items="['High price', 'Low price', 'Name', 'Date']"
      v-model="this.sortBy"
      clearable
  ></v-autocomplete>
</template>

<style scoped>

</style>