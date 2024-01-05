<script>


import addToWishlistBtn from "@/components/ShopComponents/ProductComponents/btns/addToWishlistBtn.vue";
import seeMoreBtn from "@/components/ShopComponents/ProductComponents/btns/seeMoreBtn.vue";
import addToCartBtn from "@/components/ShopComponents/ProductComponents/btns/addToCartBtn.vue";
import ProductPageImageComponent from "@/components/ProductPageComponents/ProductPageImageComponent.vue"
import ProductPageContentComponent from "@/components/ProductPageComponents/ProductPageContentComponent.vue";
import ProductPageMoreProductsComponent from "@/components/ProductPageComponents/ProductPageMoreProductsComponent.vue";
import {useProductsStore} from "@/stores/products";



export default {

  setup() {
    const productsStore = useProductsStore()
    return { productsStore}
  },

  components:{
    addToWishlistBtn, seeMoreBtn, addToCartBtn, ProductPageImageComponent, ProductPageContentComponent, ProductPageMoreProductsComponent
  },
  data() {
    return {

    }
  }

}
</script>

<template>

  <v-container>
    <v-row>
      <v-col :md='7' :cols='12'>
        <product-page-image-component :src="productsStore.getCurrentProduct[0].images.path"></product-page-image-component>
      </v-col>
      <v-col :md='5' :cols='12'>
        <product-page-content-component
        :productData = "productsStore.getCurrentProduct[0]"
        ></product-page-content-component>
      </v-col>
    </v-row>

    <v-row>
      <v-col :cols="12">
<!--        <product-page-more-products-component></product-page-more-products-component>-->



      </v-col>


    </v-row>

  </v-container>

</template>

<style scoped>


</style>