<script lang="ts">
import {defineComponent, reactive} from 'vue'
import DetailsContainer from '@/components/AccountComponents/UserDetailsTab/components/DetailsContainer.vue'
import DeliveryInput from '@/components/inputs/DeliveryInput.vue'
import {getRegions, Region} from "@/services/delivery/getRegions";
import {City, getCitiesByRegionId} from "@/services/delivery/getCitiesByRegionId";
import {getPostOfficesByCityId, PostOffice} from "@/services/delivery/getPostOfficesByCityId";
import updateUserDeliveryDetails from "@/services/account/updateUserDeliveryDetails";
import {useAccountStore} from "@/stores/account";

interface IRegion{
  id: number | null,
  name: string | null,
}
interface ICity{
  id: number | null,
  name: string | null,
}
interface IPostOffice{
  id: number | null,
  address: string | null,
}


interface DeliveryInfo {
  region: {
    id: number | null,
    name: string | null,
  },
  city: {
    id: number | null,
    name: string | null,
  },
  postOffice: {
    id: number | null,
    address: string | null,
  },
}

interface ValidsFields {
  region: boolean,
  city: boolean,
  postOffice: boolean,
}

export default defineComponent({
  name: 'DeliveryDetails',
  components: {DeliveryInput, DetailsContainer},
  setup(){
    const store = useAccountStore()
    let region : Partial<IRegion> = {name : null, id : null}
    let city : Partial<ICity> = {name : null, id : null}
    let postOffice : Partial<IPostOffice> = {address : null, id : null}
    if(store.profileData?.shipping_address.region?.name && store.profileData?.shipping_address.city?.name && store.profileData?.shipping_address.postOffice?.address){
      region = {name : store.profileData?.shipping_address.region!.name, id : store.profileData?.shipping_address.region_id!}
      city = {name : store.profileData?.shipping_address.city!.name, id : store.profileData?.shipping_address.city_id!}
      postOffice = {address : store.profileData?.shipping_address.postOffice!.address, id : store.profileData?.shipping_address.postOffice_id!}
    }

    return {store, region, city, postOffice}
  },
  data(): {
    deliveryInfo: DeliveryInfo,
    valids: ValidsFields,
    isRegionsLoading: boolean,
    isCitiesLoading: boolean,
    isPostOfficeLoading: boolean,
    regions: Region[] | undefined,
    cities: City[] | undefined,
    postOffices: PostOffice[] | undefined
  } {
    return {
      valids: {
        region: false,
        city: false,
        postOffice: false,
      },
      deliveryInfo: {
        region: {
          name: null,
          id: null,
        },
        city: {
          name: null,
          id: null,
        },
        postOffice: {
          address: null,
          id: null,
        },
      },
      isRegionsLoading: false,
      isCitiesLoading: false,
      isPostOfficeLoading: false,
      cities: [],
      postOffices: [],
      regions: []


    }
  },
  beforeMount() {
    this.fetchRegions()
  },
  methods: {
    saveRegionValue(content: { value: Region, valid: boolean }) {
      this.deliveryInfo.region = {name: content.value.name, id: content.value.id}
      this.valids.region = content.valid
      this.fetchCities()
    },
    saveCityValue(content: { value: City, valid: boolean }) {
      this.deliveryInfo.city = {name: content.value.name, id: content.value.id}
      this.valids.city = content.valid
      this.fetchPostOffices()
    },
    saveOfficeValue(content: { value: PostOffice, valid: boolean }) {
      this.deliveryInfo.postOffice = {address: content.value.address, id: content.value.id}
      this.valids.postOffice = content.valid
    },
    async saveData() {
      try {
        await updateUserDeliveryDetails({
          region_id: this.deliveryInfo.region.id!,
          city_id: this.deliveryInfo.city.id!,
          postOffice_id: this.deliveryInfo.postOffice.id!
        })
      } catch (e) {
        console.log(e)
      }
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
        if (this.deliveryInfo.region.id) {
          const cities = await getCitiesByRegionId(this.deliveryInfo.region.id)
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
        if (this.deliveryInfo.city.id) {
          const postOffices = await getPostOfficesByCityId(this.deliveryInfo.city.id)
          if (postOffices) this.postOffices = postOffices
        }
      } catch (e) {

      } finally {
        this.isPostOfficeLoading = false;
      }
    },

  },
  computed: {
    validInputs() {
      return this.valids.region && this.valids.city && this.valids.postOffice;

    }
  }
})
</script>

<template>
  <DetailsContainer title='Delivery address' icon='mdi-map-marker' v-slot="slotProps" :validInput="validInputs"
                    @saveData="saveData()">

    <v-col :cols="12" :md="6">
      <DeliveryInput label="Region" :disabled='!slotProps.editing' @update='saveRegionValue'
                     :items="regions" :default-value="region"></DeliveryInput>
    </v-col>
    <v-col :cols="12" :md="6">
      <DeliveryInput label="City" :disabled='!slotProps.editing || !valids.region' @update='saveCityValue'
                     :items="cities" :default-value="city"></DeliveryInput>
    </v-col>
    <v-col :cols="12" :md="6">
      <DeliveryInput item-title="address" label="Post Office"

                     :disabled='!slotProps.editing || !valids.city || !valids.region' @update='saveOfficeValue'
                     :items="postOffices" :default-value="postOffice"></DeliveryInput>
    </v-col>


  </DetailsContainer>
</template>

<style scoped>

</style>