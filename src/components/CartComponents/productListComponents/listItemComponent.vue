<template lang="">
    <tr>
        <td>{{this.ItemId + 1}}</td>
        <td>{{this.name}}</td>
        <td><div class='price-holder'>{{this.price}} <div class='price-currency'>{{this.currency}} </div></div></td>
        <td>
            <v-checkbox hide-details v-model='this.selected'>

            </v-checkbox>
        </td>
        <td width='40px'>
            <v-btn icon='mdi-delete' size="35" @click='deleteItem()'></v-btn>
        </td>
    </tr>
</template>
<script>
import { useCartStore } from '../../../stores/cart';

export default {

    setup() {
        const store = useCartStore()
        return {store}
    }, 

    data() {
        return {
            selected: this.isSelected
        }
    },
    props:{
        name:String,
        price: String,
        currency: String,
        isSelected: Boolean,
        ItemId: Number,
        productID : String
    },
    methods:{
        deleteItem(){
            this.store.removeProduct({id:this.productID})
        }
    },
    watch:{
        selected(){
            this.store.switchSelection({id:this.productID})
        }
    }
}
</script>
<style>
.price-holder{
    display: flex;
    align-items: baseline;
}
.price-currency{
    font-size: 13px;
    margin-left: 2%;
}
</style>