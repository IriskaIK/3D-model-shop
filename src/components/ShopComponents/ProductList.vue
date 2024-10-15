<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '@/components/ShopComponents/ProductComponents/ProductCard.vue'
import { useProductsStore } from '@/stores/products'

export default defineComponent({
  name: 'ProductList',
  components: { ProductCard },
  setup() {
    const productsStore = useProductsStore()
    return { productsStore}
  },
})
</script>

<template>
  <v-card>
    <v-container >
      <v-row>
        <v-col cols="12" lg="3" md="6" sm="6" v-for="product in productsStore.getProducts.products" :id="product.id">
          <ProductCard
            :productId="product.id"
            :tags="product.tags"
            :title="product.title"
            :subtitle="product.subtitle"
            :price="product.price"
            :src='product.images[0].path'
            :inStock='product.isInStock'></ProductCard>
        </v-col>
      </v-row>


    </v-container >
  </v-card>
</template>

<style scoped>

</style>