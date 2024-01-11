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

            <listItemComponent v-for='(item, index) in store.getProducts' :id="item.id" :productID='item.id' :src='item.src' :name='item.name' :price='item.price' :currency='item.currency'></listItemComponent>
            <totalPriceItemComponent :totalPrice='store.getTotalPrice'></totalPriceItemComponent>
            
            
            </tbody>
        </v-table>


    </v-card>
</template>
<script>
import listItemComponent from './productListComponents/listItemComponent.vue';
import totalPriceItemComponent from './productListComponents/totalPriceItemComponent.vue';
import { useCartStore } from '../../stores/cart';
export default {
    components:{
        listItemComponent,
        totalPriceItemComponent
    },
    setup() {
        const store = useCartStore()
        return {store}
    },  

    data() {
        return {

        }
    },
}
</script>
<style scoped>
.v-input__details{
    display: none;
}
.quantity-title{
    text-align: center;
}
</style>