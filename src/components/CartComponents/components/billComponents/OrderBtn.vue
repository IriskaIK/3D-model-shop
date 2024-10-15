<script lang="ts">
import { defineComponent } from 'vue'
import { useBillStore } from '@/stores/bill'

export default defineComponent({
  name: 'OrderBtn',
  methods:{
    async saveData(){
      await this.store.orderFromCart()
      window.location.reload()

    }

  },
  computed:{
    isDisabled(){
      return !this.store.getBillStatus
    }
  },
  setup(){
    const store = useBillStore()
    return {store}
  },
})
</script>

<template>
  <v-btn width='100%' color="teal" :disabled='isDisabled' @click='saveData()'>
    Order
  </v-btn>
</template>

<style scoped>

</style>