<template lang="">
    <v-hover v-slot="{ isHovering, props }">
        <v-btn variant="outlined" ripple icon="mdi-heart" size="35" class="add-btn"
        :class="{'add-btn-hover': isHovering, 'add-btn-hover' :  isInCart}" 
        :disabled = 'isInCart'
        v-bind="props"
        @click="this.addToWishlist()">
        
        </v-btn>
    </v-hover>

    
    <v-snackbar
        v-model="addToLikedSnackBar"
        :timeout="2000"
        >
        Added to wishlist

        <template v-slot:actions>
            <v-btn
            color="pink"
            variant="text"
            @click="this.addToLikedSnackBar = false"
            >
            Close
            </v-btn>
        </template>
    </v-snackbar>
</template>
<script>
import { useWishlistStore } from '../../../stores/wishlist';
import { storeToRefs } from 'pinia'

export default {
    setup() {
        const store = useWishlistStore()
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
            addToLikedSnackBar: false
        }
    },
    methods:{
        addToWishlist(){
            this.addToLikedSnackBar = true
            this.store.addProduct({name: this.name, price: this.price, id: this.productId, currency :this.currency, src: this.src})
        }
    },
    computed:{
        isInCart(){
            if(this.getProductById(this.productId)){
                return true
            }
            return false
             
        }
    }
    
}
</script>
<style scoped>
.add-btn-hover{
    color: green;
}
.add-btn{
    transition: color .1s ease-in;
}
</style>