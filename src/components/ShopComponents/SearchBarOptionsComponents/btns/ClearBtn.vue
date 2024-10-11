<script lang="ts">
import { defineComponent } from 'vue'
import { useProductsStore } from '@/stores/products'

export default defineComponent({
  name: 'ClearBtn',
  setup() {
    const productsStore = useProductsStore()
    return {productsStore}
  },
  methods:{
    clearAll(){
      this.productsStore.clearOptionsData()
      window.location.reload()
    }
  }
})
</script>

<template>
  <v-btn ripple @click='clearAll()'>
    clear
  </v-btn>
</template>

<style scoped>

</style>