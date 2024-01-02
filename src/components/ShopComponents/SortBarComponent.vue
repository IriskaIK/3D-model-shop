<template>
    <v-container grid-list-xs>
          <v-row>
              <v-col :cols='12' md='4'>
                <universe-options-component></universe-options-component>
                <tag-options-component></tag-options-component>

              </v-col>

              <v-col :cols='12' md='4'>
                <toggle-options-component></toggle-options-component>
              </v-col>





          </v-row>
          <v-row>

              <v-col :cols='12' md='6'>
                <price-options-component></price-options-component>
              </v-col>





              <v-col :cols='12' md='2'>
                <sort-options-component></sort-options-component>
              </v-col>




              <v-col :cols='12' md='3'>
                <search-btn-component></search-btn-component>

                <clear-btn-component></clear-btn-component>
              </v-col>

          </v-row>


    </v-container>

</template>




<script>


import {useProductsStore} from "@/stores/products";
import UniverseOptionsComponent
  from "@/components/ShopComponents/SearchBarOptionsComponents/UniverseOptionsComponent.vue";
import tagOptionsComponent from "@/components/ShopComponents/SearchBarOptionsComponents/TagOptionsComponent.vue";
import priceOptionsComponent from "@/components/ShopComponents/SearchBarOptionsComponents/priceOptionsComponent.vue";
import toggleOptionsComponent from "@/components/ShopComponents/SearchBarOptionsComponents/toggleOptionsComponent.vue";
import sortOptionsComponent from "@/components/ShopComponents/SearchBarOptionsComponents/sortOptionsComponent.vue";
import clearBtnComponent from "@/components/ShopComponents/SearchBarOptionsComponents/clearBtnComponent.vue";
import searchBtnComponent from "@/components/ShopComponents/SearchBarOptionsComponents/searchBtnComponent.vue";
export default {
  components: {UniverseOptionsComponent, tagOptionsComponent, priceOptionsComponent, toggleOptionsComponent, sortOptionsComponent, clearBtnComponent, searchBtnComponent},

  data() {
        return {

        }
    },
    methods:{
        clearAll(){
            this.sortBarData = {
                gameOrUniverse:[],
                secondOption: [],
                thirdOption: [],
                fourthOption: [],
                sortBy:'High price',

                displayRanOutOfStock:false,
                additionalCheckbox:false,

                range: [100, 30000],
            }
        }
    }
}
</script>
<style>
.price-p{
    color: #B7B7B7;
    font-family: 'Inter', sans-serif;
    margin-right: 10%;
}
</style>