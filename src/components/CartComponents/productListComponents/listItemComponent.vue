<template lang="">
    <tr>
       
        <td width='50px' >
            <v-img 
            :src='this.src'
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

        <quantityInputComponent :productID='this.productID'  :store=store></quantityInputComponent>

        
        <td>
            <v-checkbox hide-details v-model='store.getProductById(this.productID).isSelected'>

            </v-checkbox>
        </td>
        <td width='40px'>
            <v-btn icon='mdi-delete' size="35" @click='deleteItem()'></v-btn>
        </td>
    </tr>
</template>
<script>
import { useCartStore } from '../../../stores/cart';
import { storeToRefs } from 'pinia'
import quantityInputComponent from './quantityInputComponent.vue'
export default {

    setup() {
        const store = useCartStore()
        console.log(typeof store)
        const {getProductById } = storeToRefs(store)
        return {store, getProductById}
    }, 
    components:{
        quantityInputComponent
    },

    data() {
        return {
        }
    },
    props:{
        name:String,
        price: String,
        currency: String,
        src: String,
        productID : String,
        quantity : Number,
    },
    methods:{
        deleteItem(){
            this.store.removeProduct({id:this.productID})
        },
        changeSelected(){
            this.store.switchSelection({id:this.productID})
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