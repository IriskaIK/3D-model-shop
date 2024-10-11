<script lang="ts">
import { defineComponent } from 'vue'
import { useProductsStore } from '@/stores/products'

export default defineComponent({
  name: 'SortOptions',
  setup() {
    const productsStore = useProductsStore()
    return { productsStore}
  },
})
</script>

<template>
  <v-autocomplete
    chips
    label="Sort by"
    :items="['High price', 'Low price', 'Name', 'Date']"
    v-model="productsStore.searchOptions.orderBy"
    clearable
  ></v-autocomplete>
</template>

<style scoped>

</style>