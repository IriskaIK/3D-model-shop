<template >
    <v-card>
        <v-container >
            <v-row>
                <v-col cols="12" lg="3" md="6" sm="6" v-for="product in this.content" :id="product.id">
                    <ProductCardComponent :currency="product.currency" :productId="product.id" :tags="product.tags" :title="product.title" :subtitle="product.subtitle" :price="product.price" :src='product.src'></ProductCardComponent>
                </v-col>
            </v-row>


        </v-container >
    </v-card>
</template>
<script>
import ProductCardComponent from './ProductComponents/ProductCardComponent.vue';
export default {
    components:{
        ProductCardComponent
    },
    props:{
        content:Array
    }
}
</script>
<style lang="">
    
</style>