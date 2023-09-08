<template lang="">
    
    <personalInfoComponent></personalInfoComponent>

    <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

    <deliveryAddressComponent></deliveryAddressComponent>





    


    
    
</template>
<script>
import personalInfoComponent from './cards/personalInfoCard.vue';
import deliveryAddressComponent from './cards/deliveryAddressCard.vue';
export default {
    components:{
        personalInfoComponent,
        deliveryAddressComponent
    }

}
</script>
<style scoped>
.divider{
    margin: 2% 0;
}
</style>