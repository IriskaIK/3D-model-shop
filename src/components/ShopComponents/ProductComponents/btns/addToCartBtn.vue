<template>
    <v-btn variant="outlined" ripple prepend-icon="mdi-cart"
            @click="this.addToCart()"
            v-if="!isInCart"
            > 
                
                To cart
    </v-btn>
    <v-btn variant="outlined" :ripple='false' prepend-icon="mdi-cart" disabled
            v-else
            > 
                In cart
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
        isInCart : Boolean
    },
    emits:{
        cartBtn : null
    },
    data() {
        return {
            addToCartSnackBar : false
        }
    },
    methods:{
        addToCart(){
            this.$emit('cartBtn')
            this.addToCartSnackBar = true
        }
    }
}
</script>
<style>
    
</style>