<script>

import addToWishlistBtn from "@/components/ShopComponents/ProductComponents/btns/addToWishlistBtn.vue";
import addToCartBtn from "@/components/ShopComponents/ProductComponents/btns/addToCartBtn.vue";
import seeMoreBtn from "@/components/ShopComponents/ProductComponents/btns/seeMoreBtn.vue";
import {useCartStore} from "@/stores/cart";
import {useWishlistStore} from "@/stores/wishlist";
import {storeToRefs} from "pinia";

export default {

  components: {addToCartBtn, seeMoreBtn, addToWishlistBtn},
  props:{
    productData : Object
  },

  setup() {
    const cartStore = useCartStore()
    const wishlistStore = useWishlistStore()

    const getWithListProductById = storeToRefs(wishlistStore).getProductById
    const getCartProductById = storeToRefs(cartStore).getProductById
    return {cartStore, wishlistStore, getCartProductById, getWithListProductById}
  },

  methods:{
    addToCart(){
      this.cartStore.addProduct({
        name: this.productData.title,
        price: this.productData.price,
        id: this.productData.publicId,
        currency :this.productData.currency,
        src: this.productData.images.path})

    },
    addToWishList(){
      this.wishlistStore.addProduct({
        name: this.productData.title,
        price: this.productData.price,
        id: this.productData.publicId,
        currency :this.productData.currency,
        src: this.productData.images.path})
    }
  },
  computed:{
    isInCart(){
      const product = this.getCartProductById(this.productData.publicId)
      if(product){
        return true
      }
      return false
    },
    isInWishList(){
      const product = this.getWithListProductById(this.productData.publicId)
      if(product){
        return true
      }
      return false
    }
  }
}


</script>

<template>
  <v-card
      style="padding: 30px;"
  >


    <v-card-title>

      <div class="product-title">
        {{ this.productData.title }}
      </div>


      <v-spacer></v-spacer>


    </v-card-title>

    <v-card-subtitle>
      <div class="subtitle">
        {{ this.productData.universe.title }}/
        <div class="subtitle-content">{{ this.productData.subtitle }}</div>
      </div>


    </v-card-subtitle>
    <v-card-text>
      <v-chip class="chip-item" v-for="item in this.productData.tags" >{{item.title}}</v-chip>

      <div class="text-content">
        {{
          this.productData.content
        }}
      </div>
    </v-card-text>

    <v-divider :thickness="3" class="border-opacity-25 divider-item"></v-divider>

    <v-card-actions>
      <div class="actions-holder">
        <div class="product-price">
          {{ this.productData.price }}
          {{ this.productData.currency }}
        </div>
        <div class="product-rate">
          <v-rating
              half-increments
              hover
              :length="5"
              :size="32"
              :model-value="3"
              color="warning"
              active-color="warning"
              readonly="true"
          />

        </div>



        <addToCartBtn :in-stock="this.productData.isInStock"
                          :is-in-cart="isInCart"
                          @cart-btn="addToCart()">
        </addToCartBtn>

        <addToWishlistBtn
                          :is-in-wish-list="isInWishList"
                          @wishlist-btn="addToWishList()">
        </addToWishlistBtn>



      </div>


      <v-spacer></v-spacer>

    </v-card-actions>

  </v-card>
</template>

<style scoped>
.product-title{
  font-size: 1.6rem;
  width: max-content;
}

.product-price{
  font-size: 1.2rem;
}

.product-rate{
  margin: 10px 0;
}

.chip-item{
  margin-right: 5px;
  margin-top: 5px;
}
.chip-item:last-child{
  margin-right: 0;
}

.subtitle{
  display: flex;
}
.divider-item{
  margin: 3% 0;
}
.text-content{
  margin-top: 20px;
  font-size: 14px;

}



.actions-holder{

}

</style>