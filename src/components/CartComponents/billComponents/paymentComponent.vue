<template lang="">
    <v-card>
        <v-card-item prepend-icon='mdi-numeric-3-circle' >
            <v-card-title>
                Payment
            </v-card-title>
            <template v-slot:append>
                <saveBtnComponent from='payment' :status='this.btnStatus' :data='payment' :storage='this.store'></saveBtnComponent>
            </template>
           
        </v-card-item>
        <v-container>
        <v-row>
            <v-radio-group v-model='payment.paymentWay'>
                <v-radio label="First way of payment(with additional info)" value="firstWay"></v-radio>

                <v-radio label="Second way of payment(with much more additional info)" value="SecondWay"></v-radio>
            </v-radio-group>
            
            
            
        </v-row>
        
    </v-container>
    </v-card>
    
</template>
<script>
import saveBtnComponent from './saveBtnComponent.vue';

export default {
    
    components:{
        saveBtnComponent
    },

    data() {
        return {
            payment : {
                paymentWay: ''
            }
        }
    },
    watch:{
       
    },
    props:{
        store: Object
    },
    computed:{
        btnStatus(){
            if (this.payment.paymentWay == ''){
                return true
            }
            return false
        }
    }


}
</script>
<style scoped>
    .bill-title{
        text-align: center;
        font-size: 30px;
        margin-top: 10px;
    }
    
</style>