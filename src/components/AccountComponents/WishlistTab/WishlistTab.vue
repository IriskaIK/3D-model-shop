<script lang="ts">
import { defineComponent } from 'vue'
import { useWishlistStore } from '@/stores/wishlist'
import WishlistItem from '@/components/AccountComponents/WishlistTab/components/WishlistItem.vue'

export default defineComponent({
  name: 'WishlistTab',
  components: { WishlistItem },
  setup(){
    const store = useWishlistStore()
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
        <th class="">

        </th>
      </tr>
      </thead>
      <tbody>

      <WishlistItem v-for='(item, index) in store.getProducts' :id="item.id" :productID='item.id!' :src='item.images![0].path' :name='item.title' :price='item.price' ></WishlistItem>


      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>

</style>