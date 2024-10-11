<script lang="ts">
import { defineComponent } from 'vue'
import DetailsContainer from '@/components/AccountComponents/UserDetailsTab/components/DetailsContainer.vue'
import DeliveryInput from '@/components/inputs/DeliveryInput.vue'

export default defineComponent({
  name: 'DeliveryDetails',
  components: { DeliveryInput, DetailsContainer },
  data() {
    return {
      deliveryInfo: {region:'', city:'', postOffice: ''},
      valids:{
        region:false,
        city:false,
        postOffice:false,
      },

    }
  },
  methods:{
    saveRegionValue(content : {value : string, valid : boolean}){
      this.deliveryInfo.region = content.value
      this.valids.region = content.valid
    },
    saveCityValue(content : {value : string, valid : boolean}){
      this.deliveryInfo.city = content.value
      this.valids.city = content.valid
    },
    saveOfficeValue(content : {value : string, valid : boolean}){
      this.deliveryInfo.postOffice = content.value
      this.valids.postOffice = content.valid
    },
    saveData(){
    }
  },
  computed:{
    validInputs(){
      return this.valids.region && this.valids.city && this.valids.postOffice;

    }
  }
})
</script>

<template>
  <DetailsContainer title='Delivery address' icon='mdi-map-marker' v-slot="slotProps" :validInput="validInputs" @saveData="saveData()">

    <v-col :cols="12" :md="6">
      <DeliveryInput label="Region" :disabled='!slotProps.editing' @update='saveRegionValue' :items="['some']"></DeliveryInput>
    </v-col>
    <v-col :cols="12" :md="6">
      <DeliveryInput label="City" :disabled='!slotProps.editing' @update='saveCityValue' :items="['some']"></DeliveryInput>
    </v-col>
    <v-col :cols="12" :md="6">
      <DeliveryInput label="Post Office" :disabled='!slotProps.editing' @update='saveOfficeValue' :items="['some']"></DeliveryInput>
    </v-col>


  </DetailsContainer>
</template>

<style scoped>

</style>