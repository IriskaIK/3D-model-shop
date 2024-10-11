<script lang="ts">
import { defineComponent } from 'vue'
import ContactDetailsComponent from '@/components/CartComponents/components/billComponents/ContactDetailsComponent.vue'
import { useBillStore } from '@/stores/bill'
import DeliveryComponent from '@/components/CartComponents/components/billComponents/DeliveryComponent.vue'
import OrderBtn from '@/components/CartComponents/components/billComponents/OrderBtn.vue'
import PaymentComponent from '@/components/CartComponents/components/billComponents/PaymentComponent.vue'
import RecipientContactsComponent
  from '@/components/CartComponents/components/billComponents/RecipientContactsComponent.vue'

export default defineComponent({
  name: 'BillContainer',
  components: { RecipientContactsComponent, PaymentComponent, OrderBtn, DeliveryComponent, ContactDetailsComponent },
  setup(){
    const store = useBillStore()
    return {store}
  },
})
</script>

<template>
  <ContactDetailsComponent>
  </ContactDetailsComponent>

  <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

  <DeliveryComponent></DeliveryComponent>

  <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

  <PaymentComponent></PaymentComponent>

  <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

  <RecipientContactsComponent></RecipientContactsComponent>

  <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

  <OrderBtn></OrderBtn>
</template>

<style scoped>

</style>