<script>

import productCardComponent from "@/components/ShopComponents/ProductComponents/ProductCardComponent.vue";
import {useProductsStore} from "@/stores/products";

export default {
  components:{
    productCardComponent
  },
  setup() {
    const productsStore = useProductsStore()
    console.log(productsStore.getProducts.products)
    return { productsStore}
  },

  data() {
    return {
      products : this.productsStore.getProducts.products.slice(0,3)

    }
  },

}




</script>

<template>

  <v-card>
    <v-card-title>
      <div class="see-also-title">More products in Category</div>


    </v-card-title>


    <v-card-text>

      <v-row>
        <v-col :md="4" :cols="12" v-for="product in products">
          <product-card-component
              :currency="product.currency"
              :productId="product.publicId"
              :tags="product.tags"
              :title="product.title"
              :subtitle="product.subtitle"
              :price="product.price"
              :src='product.images.path'
              :inStock='product.isInStock'
              :is-in-product-page="true"
          ></product-card-component>
        </v-col>

      </v-row>








    </v-card-text>
  </v-card>

</template>

<style scoped>
.see-also-title{
  font-size: 2rem;
  margin: 10px 0;
}

</style>