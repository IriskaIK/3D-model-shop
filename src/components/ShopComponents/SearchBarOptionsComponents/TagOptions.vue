<script lang="ts">
import { defineComponent } from 'vue'
import { useProductsStore } from '@/stores/products'

export default defineComponent({
  name: 'TagOptions',
  setup() {
    const productsStore = useProductsStore()

    return {productsStore}
  },

})
</script>

<template>
  <v-autocomplete
    chips
    label="Tags"
    :items="productsStore.getAvailableTags"
    multiple
    item-text="title"
    item-value = "id"
    v-model="productsStore.searchOptions.tags"


    clearable
  ></v-autocomplete>
</template>

<style scoped>

</style>