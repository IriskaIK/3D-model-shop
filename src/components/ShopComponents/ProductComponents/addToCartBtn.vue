<template>
    <v-btn variant="outlined" ripple prepend-icon="mdi-cart"
            @click="this.addToCartSnackBar = true"> 
                
                Add to cart
    </v-btn>
    <v-snackbar
        v-model="addToCartSnackBar"
        :timeout="2000"
        >
        Added to cart

        <template v-slot:actions>
            <v-btn
            color="pink"
            variant="text"
            @click="addToCartSnackBar = false"
            >
            Close
            </v-btn>
        </template>
    </v-snackbar>
</template>
<script>
export default {
    props:{
        productId: String
    },
    data() {
        return {
            addToCartSnackBar : false
        }
    },
}
</script>
<style>
    
</style>