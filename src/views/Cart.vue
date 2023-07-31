<template lang="">
    <v-container>
        <v-row>
            <v-col :md='7' :cols='12'>
                <ProductListComponent></ProductListComponent>
            </v-col>
            <!-- <v-divider vertical></v-divider> -->

            <v-col :md='5' :cols='12'>
                <BillComponent></BillComponent>
            </v-col>
        </v-row>
        
    </v-container>
</template>
<script>
import ProductListComponent from '../components/CartComponents/ProductListComponent.vue';
import BillComponent from '../components/CartComponents/BillComponent.vue'
export default {
    components:{
        ProductListComponent,
        BillComponent
    }
}
</script>
<style lang="">
    
</style>