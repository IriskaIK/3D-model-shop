<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card 
        class="card" 
        :elevation="isHovering ? 12 : 2" 
        v-bind="props"
        :class="{'on-hover': isHovering }"
        >
            <v-img 
            :src="getImagePath()"
            height="200px"
            cover
            ></v-img>

            <v-card-title>
                {{this.title}}
                <v-spacer></v-spacer>
                <div class="product-price">
                    {{this.price}} {{this.currency}}
                </div>
                
                
                
            </v-card-title>

            <v-card-subtitle>
                {{this.subtitle}}
            </v-card-subtitle>
            <v-card-text style="min-height: 100px;">
                <v-chip class="chip-item" v-for="item in tags" >{{item.title}}</v-chip>
            </v-card-text>
            <v-card-actions>

                <addToCartBtn 
                :is-in-cart="isInCart"
                :in-stock="inStock"
                @cart-btn="addToCart()">
                </addToCartBtn>

                <addToWishlistBtn 
                :is-in-wish-list="isInWishList" 
                @wishlist-btn="addToWishList()">
                </addToWishlistBtn>

                <v-spacer></v-spacer>

                <seeMoreBtn  :productId="this.productId"></seeMoreBtn>
            </v-card-actions>
        
        </v-card>
    </v-hover>
    
</template>
<script>
import addToCartBtn from './btns/addToCartBtn.vue';
import addToWishlistBtn from './btns/addToWishlistBtn.vue';
import seeMoreBtn from './btns/seeMoreBtn.vue';

import { useCartStore } from '../../../stores/cart'
import { useWishlistStore } from '../../../stores/wishlist';
import { storeToRefs } from 'pinia'
export default {
    setup() {
        const cartStore = useCartStore()
        const wishlistStore = useWishlistStore()

        const getWithListProductById = storeToRefs(wishlistStore).getProductById
        const getCartProductById = storeToRefs(cartStore).getProductById
        return {cartStore, wishlistStore, getCartProductById, getWithListProductById}
    }, 
    
    components:{
        addToCartBtn,
        addToWishlistBtn,
        seeMoreBtn
    },

    props:{
        src:String,
        title:String,
        subtitle: String,
        price: Number,
        tags : Array,
        productId: String,
        currency : String,
        inStock : Boolean
    },
    data() {
        return {
 
        }
    },
    methods:{
        addToCart(){
            this.cartStore.addProduct({name: this.title, price: this.price, id: this.productId, currency :this.currency, src: this.src})

        },
        addToWishList(){
            this.wishlistStore.addProduct({name: this.title, price: this.price, id: this.productId, currency :this.currency, src: this.src})
        },
        getImagePath(){
          return "http://localhost:3000/uploads/" + this.src
      }
    },
    computed:{
        isInCart(){
            const product = this.getCartProductById(this.productId)
            if(product){
                return true
            }
            return false
        },
        isInWishList(){
            const product = this.getWithListProductById(this.productId)
            if(product){
                return true
            }
            return false
        }
    }

}
</script>
<style scoped>
.card{
    transition: opacity 0.4s ease-in-out;
}


.card:not(.on-hover) {
    opacity: 0.8;
}
.chip-item{
    margin-right: 1%;
    margin-top: 1%;
}
.product-price{
    font-size: 18px;
}

</style>