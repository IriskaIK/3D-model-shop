<script lang="ts">
import { defineComponent } from 'vue'
import AddToCartBtn from '@/components/ShopComponents/ProductComponents/btns/addToCartBtn.vue'
import AddToWishlistBtn from '@/components/ShopComponents/ProductComponents/btns/addToWishlistBtn.vue'
import SeeMoreBtn from '@/components/ShopComponents/ProductComponents/btns/seeMoreBtn.vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
import { Tag } from '@/types/product.types'
import { useWishlistStore } from '@/stores/wishlist'

export default defineComponent({
  name: 'ProductCard',
  components: { SeeMoreBtn, AddToWishlistBtn, AddToCartBtn },
  setup() {
    const cartStore = useCartStore()
    const wishlistStore = useWishlistStore()

    const getWithListProductById = storeToRefs(wishlistStore).getProductById
    const getCartProductById = storeToRefs(cartStore).getProductById
    return {cartStore, wishlistStore, getWithListProductById, getCartProductById}
  },

  props:{
    src: { type : String, required: true },
    title: { type : String, required: true },
    subtitle: String,
    price: { type :Number, required:true },
    tags : Array<Tag>,
    productId: {type : Number, required:true },
    currency : { type : String, required:true },
    inStock : Boolean,
    isInProductPage : Boolean
  },
  methods:{
    async addToCart(){
      await this.cartStore.addProduct(this.productId)
    },
    async addToWishList(){
      await  this.wishlistStore.addProduct(this.productId)
    },
    getImagePath(){
      return "http://localhost:3000/uploads/" + this.src
    }
  },
  computed:{
    isInCart(){
      const product = this.getCartProductById(this.productId)
      return !!product;

    },
    isInWishList(){
      const product = this.getWithListProductById(this.productId)
      return !!product;

    }
  }

})
</script>

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
        {{title}}
        <v-spacer></v-spacer>
        <div class="product-price">
          {{price}} {{currency}}
        </div>



      </v-card-title>

      <v-card-subtitle>
        {{subtitle}}
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

        <seeMoreBtn  :productId="productId" :isInProductPage = "isInProductPage"></seeMoreBtn>
      </v-card-actions>

    </v-card>
  </v-hover>
</template>

<style scoped>
.chip-item{
  margin-right: 3px;
}
</style>