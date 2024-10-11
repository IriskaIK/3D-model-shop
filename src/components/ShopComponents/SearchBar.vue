<script lang="ts">
import { defineComponent } from 'vue'
import CategoriesOptions from '@/components/ShopComponents/SearchBarOptionsComponents/CategoriesOptions.vue'
import TagOptions from '@/components/ShopComponents/SearchBarOptionsComponents/TagOptions.vue'
import ToggleOptions from '@/components/ShopComponents/SearchBarOptionsComponents/ToggleOptions.vue'
import PriceOptions from '@/components/ShopComponents/SearchBarOptionsComponents/PriceOptions.vue'
import SortOptions from '@/components/ShopComponents/SearchBarOptionsComponents/SortOptions.vue'
import SearchBtn from '@/components/ShopComponents/SearchBarOptionsComponents/btns/SearchBtn.vue'
import ClearBtn from '@/components/ShopComponents/SearchBarOptionsComponents/btns/ClearBtn.vue'

export default defineComponent({
  name: 'SearchBar',
  components: { ClearBtn, SearchBtn, SortOptions, PriceOptions, ToggleOptions, TagOptions, CategoriesOptions }
})
</script>

<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col :cols='12' md='4'>
        <CategoriesOptions></CategoriesOptions>
        <TagOptions></TagOptions>

      </v-col>

      <v-col :cols='12' md='4'>
        <ToggleOptions></ToggleOptions>
      </v-col>





    </v-row>
    <v-row>

      <v-col :cols='12' md='6'>
        <PriceOptions></PriceOptions>
      </v-col>





      <v-col :cols='12' md='2'>
        <SortOptions></SortOptions>
      </v-col>




      <v-col :cols='12' md='3'>
        <SearchBtn></SearchBtn>

        <ClearBtn></ClearBtn>
      </v-col>

    </v-row>


  </v-container>
</template>

<style scoped>

</style>