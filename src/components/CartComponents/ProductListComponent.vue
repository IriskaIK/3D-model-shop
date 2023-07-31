<template lang="">
    <v-card>
        
        <v-table theme="dark">
            <thead>
            <tr>
                <th class="">
                    Id
                </th>
                <th class="">
                    Name
                </th>
                <th class="">
                    Price
                </th>
                <th class="">
                    Select
                </th>
            </tr>
            </thead>
            <tbody>

            <listItemComponent v-for='(item, index) in store.getProducts' :ItemId="index" :productID='item.id' :name='item.name' :price='item.price' :currency='item.currency' :isSelected='item.isSelected'></listItemComponent>
            
            </tbody>
        </v-table>



    </v-card>
</template>
<script>
import listItemComponent from './productListComponents/listItemComponent.vue';
import { useCartStore } from '../../stores/cart';
export default {
    components:{
        listItemComponent
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
</style>