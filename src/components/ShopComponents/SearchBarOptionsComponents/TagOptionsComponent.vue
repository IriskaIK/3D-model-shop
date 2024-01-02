<script >
import {useProductsStore} from "@/stores/products";

export default {
  setup() {
    const productsStore = useProductsStore()

    return {productsStore}
  },
  data(){
    return{
      chosenOptions : this.productsStore.getSelectedTags,
    }


  },
  watch:{
    'chosenOptions'(){
      this.productsStore.setTags(this.chosenOptions)
    }
  }
}



</script>

<template>
  <v-autocomplete
      chips
      label="Tags"
      :items="productsStore.getAvailableTags"
      multiple
      item-text="title"
      item-value = "publicId"
      v-model="this.chosenOptions"


      clearable
  ></v-autocomplete>
</template>

<style>

</style>