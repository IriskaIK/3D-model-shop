<template >
    <v-btn class="btn" variant="outlined" ripple prepend-icon="mdi-eye" :to="getPathToProduct()">
        More
    </v-btn>
</template>
<script>
export default {
    props:{
        productId: String,
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

}
</script>
<style scoped>
    
</style>