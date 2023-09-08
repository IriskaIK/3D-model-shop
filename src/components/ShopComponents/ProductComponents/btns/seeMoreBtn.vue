<template >
    <v-btn class="btn" variant="outlined" ripple prepend-icon="mdi-eye" :to="'product/'+this.productId"> 
        More
    </v-btn>
</template>
<script>
export default {
    props:{
        productId: String
    },

}
</script>
<style scoped>
    
</style>