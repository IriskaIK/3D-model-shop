<script lang="ts">
import { defineComponent } from 'vue'
import { useProductsStore } from '@/stores/products'

export default defineComponent({
  name: 'PriceOptions',
  setup() {
    const productsStore = useProductsStore()
    return {productsStore}
  },


  watch:{
    'productsStore.range'(){
      this.productsStore.setMinPrice()
      this.productsStore.setMaxPrice()
    }
  }
})
</script>

<template>
  <v-range-slider
    v-model="productsStore.range"
    :max="3000"
    :min="0"
    :step="50"
    hide-details
    class="align-center"

  >
    <template v-slot:prepend>
      <p class='price-p'>Price:</p>
      <v-text-field
        :model-value='productsStore.range[0]'
        hide-details
        single-line
        type="number"
        variant="outlined"
        style="width: 100px"
        density="compact"
      ></v-text-field>

    </template>
    <template v-slot:append>
      <v-text-field
        :model-value='productsStore.range[1]'
        hide-details
        single-line
        type="number"
        variant="outlined"
        style="width: 100px"
        density="compact"
      ></v-text-field>
    </template>
  </v-range-slider>
</template>

<style scoped>

</style>