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
      additionalCheckbox : false,
      showOutOfStock : false
    }
  },
  methods : {
    toggleStock(){
      this.productsStore.searchOptions.inStock = this.showOutOfStock
    }
  }

})
</script>

<template>
  <v-checkbox @click='toggleStock' v-model='showOutOfStock' label="Display product, that ran out of stock"></v-checkbox>
  <v-checkbox v-model='additionalCheckbox' label="Additional checkbox"></v-checkbox>
</template>

<style scoped>

</style>