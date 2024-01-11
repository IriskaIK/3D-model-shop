<template>
    
    <td class='quantity-holder'>
        <v-btn density='compact' variant='text' @click='this.store.decreaseQuantity({id:productID})'>-</v-btn>
        {{store.getProductById(this.productID).quantity}}
        <v-btn density='compact' variant='text' @click='this.store.increaseQuantity({id:productID})'>+</v-btn>
    </td>
</template>
<script>
export default {
    props:{
        productID: String,
        store : Object
    },
    methods: {

    },
}
</script>
<style lang="">
    
</style>
