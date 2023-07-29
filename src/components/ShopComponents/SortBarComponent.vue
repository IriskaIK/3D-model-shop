<template lang="">
    <v-container grid-list-xs>
        <v-row>
            <v-col :cols='12' md='4'>
                <v-autocomplete
                chips
                label="Game or Universe"
                :items="['Forbiden Stars', 'Shrek', 'Shrek 2', 'Oleg', 'What?', 'Marvel']"
                multiple
                clearable
                v-model='this.sortBarData.gameOrUniverse'
                ></v-autocomplete>
                <v-autocomplete
                chips
                label="Tags"
                :items="['Dont check it', 'It isnt ready', 'I dont know', 'What i can', 'Put here', 'Some option?']"
                multiple
                v-model="this.sortBarData.secondOption"
                
                clearable
                ></v-autocomplete>
            </v-col>
            <v-col :cols='12' md='4'>
                <v-autocomplete
                chips
                label="Something"
                :items="['Forbiden Stars', 'Shrek', 'Shrek 2', 'Oleg', 'What?', 'Marvel']"
                multiple
                clearable
                v-model='this.sortBarData.thirdOption'
                ></v-autocomplete>
                <v-autocomplete
                chips
                label="Another input"
                :items="['Dont check it', 'It isnt ready', 'I dont know', 'What i can', 'Put here', 'Some option?']"
                multiple
                v-model="this.sortBarData.fourthOption"
                
                clearable
                ></v-autocomplete>
            </v-col>
            <v-col :cols='12' md='4'>
                <v-checkbox v-model='this.sortBarData.displayRanOutOfStock' label="Display product, that ran out of stock"></v-checkbox>
                <v-checkbox v-model='this.sortBarData.additionalCheckbox' label="Additional checkbox"></v-checkbox>
            </v-col>
            <v-col :cols='12' md='3'>
                
            </v-col>

            
            
            
        </v-row>
        <v-row>
            
            <v-col :cols='12' md='6'>
                <v-range-slider
                v-model="this.sortBarData.range"
                :max="30000"
                :min="100"
                :step="100"
                hide-details
                class="align-center"
                
                >
                    <template v-slot:prepend>
                        <p class='price-p'>Price:</p>
                        <v-text-field
                        :model-value='this.sortBarData.range[0]'
                        hide-details
                        single-line
                        type="number"
                        variant="outlined"
                        style="width: 100px"
                        density="compact"
                        @change="setMin($event)"
                        ></v-text-field>

                    </template>
                    <template v-slot:append>
                    <v-text-field
                    :model-value='this.sortBarData.range[1]'
                    hide-details
                    single-line
                    type="number"
                    variant="outlined"
                    style="width: 100px"
                    density="compact"
                    @change="setMax($event)"
                    ></v-text-field>
                </template>
            </v-range-slider>
            </v-col>
            <v-col :cols='12' md='2'>
                <v-autocomplete
                chips
                label="Sort by"
                :items="['High price', 'Low price', 'Name', 'Date']"
                v-model="this.sortBarData.sortBy"
                
                clearable
                ></v-autocomplete>
            </v-col>
            <v-col :cols='12' md='3'>
                <v-btn
                class="me-4"
                ripple
                color="success"
                >
                Search
                </v-btn>

                <v-btn ripple @click='this.clearAll()'>
                clear
                </v-btn>
            </v-col>
            
        </v-row>
        
        
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            sortBarData:{
                gameOrUniverse:[],
                secondOption: [],
                thirdOption: [],
                fourthOption: [],
                sortBy:'High price',

                displayRanOutOfStock:false,
                additionalCheckbox:false,

                range: [100, 30000],
            },

           
        }
    },
    methods:{
        setMin(event){
            this.sortBarData.range[0]=event.target.value
            
        },
        setMax(event){
            this.sortBarData.range[1]=event.target.value
            
        },
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