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
import { useCartStore } from '../../../stores/cart'
import { storeToRefs } from 'pinia'

export default {
    setup() {
        const store = useCartStore()
        const {getProductById } = storeToRefs(store)
        return {store, getProductById}
    }, 

    props:{
        productId: String,
        price: String,
        name : String,
        currency : String,
        src: String
    },
    data() {
        return {
            addToCartSnackBar : false
        }
    },
    methods:{
        addToCart(){
            this.addToCartSnackBar = true
            console.log(this.src)
            this.store.addProduct({name: this.name, price: this.price, id: this.productId, currency :this.currency, src: this.src})
        }
    },
    computed:{
        isInCart(){
            return this.getProductById(this.productId)
        }
    }
}
</script>
<style>
    
</style>