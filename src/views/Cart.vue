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

    <v-divider :thickness="3" class="border-opacity-25 divider-item" style="margin: 3% 0;"></v-divider>
    <v-footer >
        <div class="px-4 py-2 text-center w-100">
            {{ new Date().getFullYear() }} — <strong>TestApp</strong>
        </div>
    </v-footer>
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