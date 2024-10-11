<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/stores/cart'
import ListItem from '@/components/CartComponents/components/productListComponents/ListItem.vue'
import TotalPrice from '@/components/CartComponents/components/productListComponents/TotalPrice.vue'

export default defineComponent({
  name: 'ProductListContainer',
  components: { TotalPrice, ListItem },
  setup() {
    const store = useCartStore()
    return {store}
  },
})
</script>

<template>
  <v-card>

    <v-table >
      <thead>
      <tr>
        <th class="">

        </th>
        <th class="">
          Name
        </th>
        <th class="">
          Price
        </th>
        <th style='text-align:center;'>
          Quantity
        </th>
        <th class="">
          Select
        </th>
      </tr>
      </thead>
      <tbody>

      <ListItem v-for='(item, index) in store.getProducts' :id="item.id" :productID='item.id!' :src='item.images![0].path' :name='item.title' :price='item.price' :currency='item.currency'></ListItem>
      <TotalPrice :totalPrice='store.getTotalPrice'></TotalPrice>


      </tbody>
    </v-table>


  </v-card>
</template>

<style scoped>

</style>