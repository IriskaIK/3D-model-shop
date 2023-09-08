<template>
    <SortBarComponent></SortBarComponent>
    
    <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

    <ProductListComponent></ProductListComponent>
                    

    <v-divider :thickness="3" class="border-opacity-25 divider-item" style="margin: 3% 0;"></v-divider>
    <v-footer >
        <div class="px-4 py-2 text-center w-100">
            {{ new Date().getFullYear() }} — <strong>TestApp</strong>
        </div>
    </v-footer>
    


    
    
    
</template>
<script>

import ProductListComponent from '../components/ShopComponents/ProductListComponent.vue';
import SortBarComponent from '../components/ShopComponents/SortBarComponent.vue'
export default {
    components:{
        ProductListComponent,
        SortBarComponent
    },
    data() {
        return {
            
            
        }
    },
    
}
</script>
<style scoped>
.divider{
    margin: 2% 0;
}
</style>