<script lang="ts">
import { defineComponent } from 'vue'
import SeeMoreBtn from '@/components/ShopComponents/ProductComponents/btns/seeMoreBtn.vue'
import { useWishlistStore } from '@/stores/wishlist'

export default defineComponent({
  name: 'WishlistItem',
  setup() {
    const store = useWishlistStore()
    return {store}
  },
  components:{
    SeeMoreBtn
  },

  data() {
    return {
    }
  },
  props:{
    name:String,
    price: Number,
    src: String,
    productID : { type : Number, required: true },
    quantity : Number,
  },
  methods:{
    async deleteItem(){
      await this.store.removeProduct(this.productID)
    },
    getImagePath(){
      return "http://localhost:3000/uploads/" + this.src
    }
  },
})
</script>

<template>
  <tr>

    <td width='50px' >
      <v-img
        :src="getImagePath()"
        height="50px"
        width='50px'
        cover

      ></v-img>
    </td>

    <td> {{name}}</td>
    <td>
      <div class='price-holder'>
        {{price}}$
<!--        <div class='price-currency'>-->
<!--          $-->
<!--        </div>-->
      </div>
    </td>

    <td>
      <SeeMoreBtn :product-id="productID" :is-in-product-page="false"></SeeMoreBtn>
    </td>
    <td width='40px'>
      <v-btn icon='mdi-delete' size="35" @click='deleteItem()'></v-btn>
    </td>
  </tr>
</template>

<style scoped>

</style>