<script lang="ts">
import { defineComponent } from 'vue'
import { useProductsStore } from '@/stores/products'

export default defineComponent({
  name: 'ToggleOptions',
  setup() {
    const productsStore = useProductsStore()
    return { productsStore}
  },
  data(){
    return{
      additionalCheckbox : false
    }
  },

})
</script>

<template>
  <v-checkbox v-model='productsStore.searchOptions.inStock' label="Display product, that ran out of stock"></v-checkbox>
  <v-checkbox v-model='additionalCheckbox' label="Additional checkbox"></v-checkbox>
</template>

<style scoped>

</style>