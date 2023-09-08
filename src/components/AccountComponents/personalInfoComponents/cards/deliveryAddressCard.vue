<template >
    <infoCardComponent title='Delivery address' icon='mdi-map-marker' v-slot="slotProps" :validInput="validInputs" @saveData="saveData()">
        
        <v-col :cols="12" :md="6">
            <deliveryInput label="Region" :disabled='!slotProps.editing' @update='saveRegionValue' :items="['some']"></deliveryInput>
        </v-col>
        <v-col :cols="12" :md="6">
            <deliveryInput label="City" :disabled='!slotProps.editing' @update='saveCityValue' :items="['some']"></deliveryInput>
        </v-col>
        <v-col :cols="12" :md="6">
            <deliveryInput label="Post Office" :disabled='!slotProps.editing' @update='saveOfficeValue' :items="['some']"></deliveryInput>
        </v-col>

           
    </infoCardComponent>
</template>
<script>
import infoCardComponent from './infoCardComponent.vue';
import deliveryInput from '../../../inputs/deliveryInput.vue';
export default {
    components:{
        infoCardComponent,
        deliveryInput
    },
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
        saveRegionValue(content){
            this.deliveryInfo.region = content.value
            this.valids.region = content.valid
        },
        saveCityValue(content){
            this.deliveryInfo.city = content.value
            this.valids.city = content.valid
        },
        saveOfficeValue(content){
            this.deliveryInfo.postOffice = content.value
            this.valids.postOffice = content.valid
        },
        saveData(){
        }
    },
    computed:{
        validInputs(){
            if(this.valids.region && this.valids.city && this.valids.postOffice){
                return true
            }
            return false
        }
    }
    
}
</script>
<style lang="">
    
</style>