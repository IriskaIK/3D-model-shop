<script lang="ts">
import {defineComponent} from 'vue'
import {useProductsStore} from '@/stores/products'

export default defineComponent({
  name: 'PriceOptions',
  setup() {
    const productsStore = useProductsStore()
    return {productsStore}
  },
  data(){

  },
  methods:{
    updateMax(value : string){
        this.productsStore.range[1] = +value;
        this.productsStore.setMaxPrice()
    },
    updateMin(value : string){
      this.productsStore.range[0] = +value
      this.productsStore.setMinPrice()
    }
  },


  watch: {
    'productsStore.range'() {
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
          v-model="productsStore.range[0]"
          @update:model-value="updateMin"
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
          v-model="productsStore.range[1]"
          @update:model-value="updateMax"
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