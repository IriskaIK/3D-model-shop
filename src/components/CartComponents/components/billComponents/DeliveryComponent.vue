<script lang="ts">
import { defineComponent } from 'vue'
import SaveBtn from '@/components/CartComponents/components/billComponents/SaveBtn.vue'
import { useBillStore } from '@/stores/bill'

export default defineComponent({
  name: 'DeliveryComponent',
  components: { SaveBtn },
  data() {
    return {
      deliveryData:{
        region : '',
        city: '',
        postOffice: '',
      },
      stateOfInputs : {
        region: false,
        city : true,
        office : true
      },

    }
  },
  methods: {
    setRegion(){
      this.deliveryData.city = ''
      this.deliveryData.postOffice = ''
      this.stateOfInputs.office = true

      this.stateOfInputs.city = this.deliveryData.region == '';

    },
    setCity(){
      this.deliveryData.postOffice = ''
      if(this.deliveryData.city != ''){
        this.stateOfInputs.office = false
      }
    }
  },
  computed:{
    btnStatus(){
      return !(this.deliveryData.region && this.deliveryData.city && this.deliveryData.postOffice);

    }
  },
  watch:{

  },
  setup(){
    const store = useBillStore()
    return {store}
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
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          ></v-autocomplete>
        </v-col>
        <v-col cols='12' md='6'>
          <v-autocomplete
            label="City"
            v-model="deliveryData.city"
            @update:modelValue='setCity()'
            :disabled='stateOfInputs.city'
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
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
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          ></v-autocomplete>
          <v-card>
            <v-card-title>
              <div class='total-chips'>
                <v-chip v-if="deliveryData.region != ''">
                  {{deliveryData.region}}
                </v-chip>
                <v-chip  v-if="deliveryData.city != ''">
                  {{deliveryData.city}}
                </v-chip>
                <v-chip  v-if="deliveryData.postOffice != ''">
                  {{deliveryData.postOffice}}
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