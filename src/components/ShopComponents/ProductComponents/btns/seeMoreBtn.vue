<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'seeMoreBtn',
  props:{
    productId: Number,
    isInProductPage: Boolean
  },
  methods:{
    getPathToProduct(){
      if(this.isInProductPage){
        return this.productId
      }
      return 'product/'+this.productId
    }
  }
})
</script>

<template>
  <v-btn class="btn" variant="outlined" ripple prepend-icon="mdi-eye" :to="getPathToProduct()">
    More
  </v-btn>
</template>

<style scoped>

</style>