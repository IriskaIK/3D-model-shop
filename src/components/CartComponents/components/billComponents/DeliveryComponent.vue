<script lang="ts">
import { defineComponent } from 'vue'
import SaveBtn from '@/components/CartComponents/components/billComponents/SaveBtn.vue'
import { useBillStore } from '@/stores/bill'
import {getRegions, Region} from "@/services/delivery/getRegions";
import {getCitiesByRegionId} from "@/services/delivery/getCitiesByRegionId";
import {getPostOfficesByCityId, PostOffice} from "@/services/delivery/getPostOfficesByCityId";
import {useAccountStore} from "@/stores/account";

interface Data {
  deliveryData : {
    region: {
      // id: number | null | undefined,
      // name: string | null | undefined,
      id: number,
      name: string,
    },
    city: {
      // id: number | null | undefined,
      // name: string | null | undefined,
      id: number,
      name: string,
    },
    postOffice: {
      // id: number | null | undefined,
      // address: string | null | undefined,
      id: number ,
      address: string,
    },
  },
  stateOfInputs : {
    region : boolean,
    city : boolean,
    office : boolean,
  },
  isRegionsLoading : boolean,
  isCitiesLoading : boolean,
  isPostOfficeLoading : boolean,
  regions : Partial<Region>[] | null,
  cities : Partial<City>[] | null,
  postOffices : Partial<PostOffice>[] | null,

}


export default defineComponent({
  name: 'DeliveryComponent',
  components: { SaveBtn },
  data() : Data {
    return {
      deliveryData:{
        region : {id : 0, name : ''},
        city: {id: 0, name : ''},
        postOffice: {address : '', id: 0},
      },
      stateOfInputs : {
        region: false,
        city : true,
        office : true
      },
      isRegionsLoading : false,
      isCitiesLoading : false,
      isPostOfficeLoading : false,
      regions : [],
      cities : [],
      postOffices : [],



    }
  },
  methods: {
    setRegion(){
      this.deliveryData.city = {name: '', id : 0}
      this.deliveryData.postOffice = {address: '', id : 0}
      this.stateOfInputs.office = true

      this.stateOfInputs.city = this.deliveryData.region.name == '';
      this.fetchCities()

    },
    setCity(){
      this.deliveryData.postOffice = {address: '', id : 0}
      if(this.deliveryData.city.name != ''){
        this.stateOfInputs.office = false
      }

      this.fetchPostOffices()
    },
    async fetchRegions() {
      this.isRegionsLoading = true;
      try {
        const regions = await getRegions()
        if (regions) {
          this.regions = regions
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.isRegionsLoading = false;
      }

    },
    async fetchCities() {
      this.isCitiesLoading = true;
      try {
        if (this.deliveryData.region.id) {
          const cities = await getCitiesByRegionId(this.deliveryData.region.id)
          if (cities) this.cities = cities
        }
      } catch (e) {

      } finally {
        this.isCitiesLoading = false;
      }
    },
    async fetchPostOffices() {
      this.isPostOfficeLoading = true;
      try {
        if (this.deliveryData.city.id) {
          const postOffices = await getPostOfficesByCityId(this.deliveryData.city.id)
          if (postOffices) this.postOffices = postOffices
        }
      } catch (e) {

      } finally {
        this.isPostOfficeLoading = false;
      }
    },
  },
  computed:{
    btnStatus(){
      return !(this.deliveryData.region.name && this.deliveryData.city.name && this.deliveryData.postOffice.address);

    }
  },
  watch:{

  },
  setup(){
    const store = useBillStore()
    const accountStore = useAccountStore()
    return {store, accountStore}
  },
  beforeMount() {
    this.fetchRegions()
  },
})
</script>

<template>
  <v-card>
    <v-card-item prepend-icon='mdi-numeric-2-circle' >
      <v-card-title>
        Delivery
      </v-card-title>
      <template v-slot:append>
        <SaveBtn from='deliveryInfo' :status='btnStatus' :data='deliveryData' ></SaveBtn>
      </template>

    </v-card-item>

    <v-container>
      <v-row>
        <v-col cols='12' md='6'>
          <v-autocomplete
            v-model="deliveryData.region"
            @update:modelValue='setRegion()'
            :disabled='stateOfInputs.region'
            label="Region"
            :items="regions || undefined"
            item-title="name"
            item-value="id"
            :return-object="true"
          ></v-autocomplete>
        </v-col>
        <v-col cols='12' md='6'>
          <v-autocomplete
            label="City"
            v-model="deliveryData.city"
            @update:modelValue='setCity()'
            :disabled='stateOfInputs.city'
            :items="cities || undefined"
            item-title="name"
            item-value="id"
            :return-object="true"
          ></v-autocomplete>
        </v-col>
        <v-col cols='12' md='6'>
<!--          <mapComponent>-->

<!--          </mapComponent>-->
        </v-col>
        <v-col cols='12' md='6' class='location-office-container'>
          <v-autocomplete
            label="Post office"
            :disabled='stateOfInputs.office'
            v-model="deliveryData.postOffice"
            item-title="address"
            item-value="id"
            :return-object="true"
            :items="postOffices || undefined"
          ></v-autocomplete>
          <v-card>
            <v-card-title>
              <div class='total-chips'>
                <v-chip v-if="deliveryData.region.name">
                  {{deliveryData.region.name}}
                </v-chip>
                <v-chip  v-if="deliveryData.city.name">
                  {{deliveryData.city.name}}
                </v-chip>
                <v-chip  v-if="deliveryData.postOffice.address">
                  {{deliveryData.postOffice.address}}
                </v-chip>
              </div>

            </v-card-title>
          </v-card>
        </v-col>


      </v-row>

    </v-container>
  </v-card>
</template>

<style scoped>
.bill-title{
  text-align: center;
  font-size: 30px;
  margin-top: 10px;
}
.total-chips{
  display: flex;
  justify-content: center;
  gap: 10px;
}
.location-office-container{
  display: flex;
  flex-direction: column;
}
</style>