<script lang="ts">
import { defineComponent } from 'vue'
import { useProductsStore } from '@/stores/products'

export default defineComponent({
  name: 'CategoriesOptions',
  setup() {
    const productsStore = useProductsStore();

    return {productsStore}
  },
})
</script>

<template>
  <v-autocomplete
    chips
    label="Game or Universe"
    :items="productsStore.getAvailableCategories"
    item-text="title"
    item-value = "id"
    multiple
    clearable
    v-model='productsStore.searchOptions.category'

  ></v-autocomplete>
</template>

<style scoped>

</style>