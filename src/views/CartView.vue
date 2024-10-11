<script lang="ts">
import { defineComponent } from 'vue'
import ProductListContainer from '@/components/CartComponents/ProductListContainer.vue'
import BillContainer from '@/components/CartComponents/BillContainer.vue'

export default defineComponent({
  name: 'CartView',
  components: { BillContainer, ProductListContainer }
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col :md='7' :cols='12'>
        <ProductListContainer></ProductListContainer>
      </v-col>
      <!-- <v-divider vertical></v-divider> -->

      <v-col :md='5' :cols='12'>
        <BillContainer></BillContainer>
      </v-col>
    </v-row>

  </v-container>

  <v-divider :thickness="3" class="border-opacity-25 divider-item" style="margin: 3% 0;"></v-divider>
  <v-footer >
    <div class="px-4 py-2 text-center w-100">
      {{ new Date().getFullYear() }} — <strong>TestApp</strong>
    </div>
  </v-footer>
</template>

<style scoped>

</style>