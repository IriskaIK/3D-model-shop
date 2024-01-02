<template >
    <v-card>
        <v-container >
            <v-row>
                <v-col cols="12" lg="3" md="6" sm="6" v-for="product in this.productsStore.getProducts.products" :id="product.publicId">
                    <ProductCardComponent :currency="product.currency" :productId="product.publicId" :tags="product.tags" :title="product.title" :subtitle="product.subtitle" :price="product.price" :src='product.images.path' :inStock='product.isInStock'></ProductCardComponent>
                </v-col>
            </v-row>


        </v-container >
    </v-card>
</template>
<script>
import ProductCardComponent from './ProductComponents/ProductCardComponent.vue';
import {useProductsStore} from "@/stores/products";
export default {
    components:{
        ProductCardComponent
    },
    setup() {
      const productsStore = useProductsStore()
      console.log(productsStore.getProducts.products)
      return { productsStore}
    },

    data() {
        return {
          // products : this.productsStore.getProducts.products

        }
    },
}
</script>
<style lang="">
    
</style>