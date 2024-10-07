<script >
import {useProductsStore} from "@/stores/products";

export default {
  setup() {
    const productsStore = useProductsStore()


    return {productsStore}
  },
  data(){
    return{
      chosenOptions : this.productsStore.getSelectedCategories,
    }


  },

  watch:{
    'chosenOptions'(){
      this.productsStore.setCategory(this.chosenOptions)
    }
  }
}



</script>

<template>
  <v-autocomplete
      chips
      label="Game or Universe"
      :items="productsStore.getAvailableCategories"
      item-text="title"
      item-value = "publicId"
      multiple
      clearable
      v-model='this.chosenOptions'

  ></v-autocomplete>
</template>

<style>

</style>