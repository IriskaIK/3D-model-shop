<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'QuantityInput',
  props:{
    productID: { type : Number, required:true },
  },
  setup(){
    const store = useCartStore()
    return{store}
  }
})
</script>

<template>
  <td class='quantity-holder'>
    <v-btn density='compact' variant='text' @click='store.decreaseQuantity(productID)'>-</v-btn>
    {{store.getProductById(productID)!.quantity}}
    <v-btn density='compact' variant='text' @click='store.increaseQuantity(productID)'>+</v-btn>
  </td>
</template>

<style scoped>

</style>