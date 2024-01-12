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

        <wishlistItemComponent v-for='(item, index) in store.getProducts' :id="item.id" :productID='item.id' :src='item.src' :name='item.name' :price='item.price' :currency='item.currency'></wishlistItemComponent>


        </tbody>
      </v-table>
    </v-card>
</template>
<script>
import wishlistItemComponent from "@/components/AccountComponents/wishlistComponents/wishlistItemComponent.vue";
import {useWishlistStore} from "@/stores/wishlist";

export default {
  setup(){
    const store = useWishlistStore()
    return {store}
  },
  components: {wishlistItemComponent}

}
</script>
<style lang="">
    
</style>