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

    <td> {{this.name}}</td>
    <td>
      <div class='price-holder'>
        {{this.price}}
        <div class='price-currency'>
          {{this.currency}}
        </div>
      </div>
    </td>

    <td>
      <see-more-btn :product-id="this.productID" :is-in-product-page="false"></see-more-btn>
    </td>
    <td width='40px'>
      <v-btn icon='mdi-delete' size="35" @click='deleteItem()'></v-btn>
    </td>
  </tr>
</template>
<script>
import {useWishlistStore} from "@/stores/wishlist";
import seeMoreBtn from "@/components/ShopComponents/ProductComponents/btns/seeMoreBtn.vue";
import {removeWishlistItem} from "@/services/wishlist/removeWishlistItem";

export default {

  setup() {
    const store = useWishlistStore()
    return {store}
  },
  components:{
    seeMoreBtn
  },

  data() {
    return {
    }
  },
  props:{
    name:String,
    price: Number,
    currency: String,
    src: String,
    productID : String,
    quantity : Number,
  },
  methods:{
    async deleteItem(){
      this.store.removeProduct({id:this.productID})
      await removeWishlistItem(this.productID)
    },
    getImagePath(){
      return "http://localhost:3000/uploads/" + this.src
    }
  },
  watch:{
    selected(){

    }
  }
}
</script>
<style scoped>
.price-holder{
  display: flex;
  align-items: baseline;
}
.quantity-holder{
  text-align: center;
}
.price-currency{
  font-size: 13px;
  margin-left: 2%;
}
</style>