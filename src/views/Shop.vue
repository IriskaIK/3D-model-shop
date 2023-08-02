<template>
    <SortBarComponent></SortBarComponent>
    
    <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

    <ProductListComponent></ProductListComponent>
                    



    


    
    
    
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