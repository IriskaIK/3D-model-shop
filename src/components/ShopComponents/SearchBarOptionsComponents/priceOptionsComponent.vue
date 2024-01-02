<script>

  import {useProductsStore} from "@/stores/products";

  export default {
    setup() {
      const productsStore = useProductsStore()
      return {productsStore}
    },
    data(){
      return{

        range: this.productsStore.getRange,

      }

    },
    methods:{
      setMin(event){
        this.range[0]=event.target.value
        this.productsStore.setMinPrice(this.range[0])
      },
      setMax(event){
        this.range[1]=event.target.value
        this.productsStore.setMaxPrice(this.range[1])
      },
    },
    watch:{
      'range'(){
        this.productsStore.setMinPrice(this.range[0])
        this.productsStore.setMaxPrice(this.range[1])
      }
    }
  }
</script>

<template>
  <v-range-slider
      v-model="this.range"
      :max="3000"
      :min="0"
      :step="50"
      hide-details
      class="align-center"

  >
    <template v-slot:prepend>
      <p class='price-p'>Price:</p>
      <v-text-field
          :model-value='this.range[0]'
          hide-details
          single-line
          type="number"
          variant="outlined"
          style="width: 100px"
          density="compact"
          @change="setMin($event)"
      ></v-text-field>

    </template>
    <template v-slot:append>
      <v-text-field
          :model-value='this.range[1]'
          hide-details
          single-line
          type="number"
          variant="outlined"
          style="width: 100px"
          density="compact"
          @change="setMax($event)"
      ></v-text-field>
    </template>
  </v-range-slider>

</template>

<style>

</style>