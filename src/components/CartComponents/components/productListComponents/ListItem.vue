<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import QuantityInput from '@/components/CartComponents/components/productListComponents/QuantityInput.vue'

export default defineComponent({
  name: 'ListItem',
  components: { QuantityInput },
  setup() {
    const store = useCartStore()
    console.log(typeof store)
    const {getProductById } = storeToRefs(store)
    return {store, getProductById}
  },

  data() {
    return {
    }
  },
  props:{
    name:String,
    price: Number,
    src: String,
    productID : { type :  Number, required: true },
    // quantity : {type : Number, required : true },
    // selected : {type : Boolean, required:true },
  },
  methods:{
    async deleteItem(){
      await this.store.removeProduct(this.productID)
    },
    async changeSelected(){
      await this.store.switchSelection(this.productID)
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

    <QuantityInput :productID='productID'  :store=store></QuantityInput>


    <td>
      <v-checkbox hide-details @click="changeSelected" v-model='store.getProductById(productID)!.selected'>

      </v-checkbox>
    </td>
    <td width='40px'>
      <v-btn icon='mdi-delete' size="35" @click='deleteItem()'></v-btn>
    </td>
  </tr>
</template>

<style scoped>

</style>