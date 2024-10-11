<script lang="ts">
import { defineComponent } from 'vue'
import SearchBar from '@/components/ShopComponents/SearchBar.vue'
import ProductList from '@/components/ShopComponents/ProductList.vue'

export default defineComponent({
  name: 'ShopView',
  components: { ProductList, SearchBar }
})
</script>

<template>
  <SearchBar></SearchBar>

  <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

  <ProductList></ProductList>


  <v-divider :thickness="3" class="border-opacity-25 divider-item" style="margin: 3% 0;"></v-divider>

  <v-footer >
    <div class="px-4 py-2 text-center w-100">
      {{ new Date().getFullYear() }} — <strong>TestApp</strong>
    </div>
  </v-footer>
</template>

<style scoped>
.divider{
  margin: 2% 0;
}
</style>