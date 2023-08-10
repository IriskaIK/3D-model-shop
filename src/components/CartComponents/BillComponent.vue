<template lang="">

    <contactDetailComponent :store='this.store'></contactDetailComponent>

    <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

    <deliveryComponent :store='this.store'></deliveryComponent>

    <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

    <paymentComponent :store='this.store'></paymentComponent>

    <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

    <recipientContactsComponent :store='this.store'></recipientContactsComponent>

    <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

    <orderBtnComponent></orderBtnComponent>
        

</template>
<script>
import contactDetailComponent from './billComponents/contactDetailComponent.vue';
import deliveryComponent from './billComponents/deliveryComponent.vue';
import paymentComponent from './billComponents/paymentComponent.vue';
import recipientContactsComponent from './billComponents/recipientContactsComponent.vue';
import orderBtnComponent from './billComponents/orderBtnComponent.vue';

import { useBillStore } from '../../stores/bill';

export default {
    setup(){
        const store = useBillStore()
        return {store}
    },
    components:{
        contactDetailComponent,
        deliveryComponent,
        paymentComponent,
        recipientContactsComponent,
        orderBtnComponent
    }
}
</script>
<style>
.divider{
    margin: 2% 0;
}
</style>