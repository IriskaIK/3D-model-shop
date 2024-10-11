<script lang="ts">
import { defineComponent } from 'vue'
import SaveBtn from '@/components/CartComponents/components/billComponents/SaveBtn.vue'
import { useBillStore } from '@/stores/bill'

export default defineComponent({
  name: 'PaymentComponent',
  components: { SaveBtn },
  data() {
    return {
      payment : {
        paymentWay: ''
      }
    }
  },
  watch:{

  },
  setup(){
    const store = useBillStore()
    return {store}
  },
  computed:{
    btnStatus(){
      return this.payment.paymentWay == '';

    }
  }
})
</script>

<template>
  <v-card>
    <v-card-item prepend-icon='mdi-numeric-3-circle' >
      <v-card-title>
        Payment
      </v-card-title>
      <template v-slot:append>
        <SaveBtn from='payment' :status='btnStatus' :data='payment' ></SaveBtn>
      </template>

    </v-card-item>
    <v-container>
      <v-row>
        <v-radio-group v-model='payment.paymentWay'>
          <v-radio label="First way of payment(with additional info)" value="firstWay"></v-radio>

          <v-radio label="Second way of payment(with much more additional info)" value="SecondWay"></v-radio>
        </v-radio-group>



      </v-row>

    </v-container>
  </v-card>
</template>

<style scoped>

</style>