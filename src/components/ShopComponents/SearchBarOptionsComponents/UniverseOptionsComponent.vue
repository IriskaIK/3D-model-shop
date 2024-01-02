<script >
import {useProductsStore} from "@/stores/products";

export default {
  setup() {
    const productsStore = useProductsStore()


    return {productsStore}
  },
  data(){
    return{
      chosenOptions : this.productsStore.getSelectedUniverses,
    }


  },

  watch:{
    'chosenOptions'(){
      this.productsStore.setUniverse(this.chosenOptions)
    }
  }
}



</script>

<template>
  <v-autocomplete
      chips
      label="Game or Universe"
      :items="productsStore.getAvailableUniverses"
      item-text="title"
      item-value = "publicId"
      multiple
      clearable
      v-model='this.chosenOptions'

  ></v-autocomplete>
</template>

<style>

</style>