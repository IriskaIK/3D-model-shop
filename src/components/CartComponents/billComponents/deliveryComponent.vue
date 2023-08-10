<template lang="">
    <v-card>
        <v-card-item prepend-icon='mdi-numeric-2-circle' >
            <v-card-title>
                Delivery
            </v-card-title>
            <template v-slot:append>
                <saveBtnComponent from='deliveryInfo' :status='this.btnStatus' :data='userData' :storage='this.store'></saveBtnComponent>
            </template>
           
        </v-card-item>

        <v-container>
        <v-row>
            <v-col cols='12' md='6'>
                <v-autocomplete
                v-model="this.region"
                @update:modelValue='setRegion()'
                :disabled='stateOfInputs.region'
                label="Region"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                ></v-autocomplete>
            </v-col>
            <v-col cols='12' md='6'>
                <v-autocomplete
                label="City"
                v-model="this.city"
                @update:modelValue='setCity()'
                :disabled='stateOfInputs.city'
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                ></v-autocomplete>
            </v-col>
            <v-col cols='12' md='6'>
                <mapComponent>

                </mapComponent>
            </v-col>
            <v-col cols='12' md='6' class='location-office-container'>
                <v-autocomplete
                label="Post office"
                :disabled='stateOfInputs.office'
                v-model="this.postOffice"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                ></v-autocomplete>
                <v-card>
                    <v-card-title>
                        <div class='total-chips'>
                            <v-chip v-if="this.region != ''">
                                {{this.region}}
                            </v-chip>
                            <v-chip  v-if="this.city != ''">
                                {{this.city}}
                            </v-chip>
                            <v-chip  v-if="this.postOffice != ''">
                                {{this.postOffice}}
                            </v-chip>
                        </div>
                        
                    </v-card-title>
                </v-card>
            </v-col>
            
            
        </v-row>
        
    </v-container>
    </v-card>
    
</template>
<script>
import mapComponent from './mapComponent.vue';
import saveBtnComponent from './saveBtnComponent.vue';

export default {
    components:{
        mapComponent,
        saveBtnComponent
    },
    data() {
        return {
            region : '',
            city: '',
            postOffice: '',
            stateOfInputs : {
                region: false,
                city : true,
                office : true
            },

        }
    },
    methods: {
        setRegion(){
            this.city = ''
            this.postOffice = ''
            this.stateOfInputs.office = true
            
            if(this.region != ''){
                this.stateOfInputs.city = false
            }else{
                this.stateOfInputs.city = true
            }
            
        },
        setCity(){
            this.postOffice = ''
            if(this.city != ''){
                this.stateOfInputs.office = false
            }
        }
    },
    computed:{
       
    },
    watch:{
       
    },
    props:{
        store: Object
    },

}
</script>
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