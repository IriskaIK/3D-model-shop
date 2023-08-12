<template lang="">
    <v-card>
        <v-card-item prepend-icon='mdi-numeric-1-circle' >
            <v-card-title>
                Your contacts
            </v-card-title>
            <template v-slot:append>
                <saveBtnComponent from='userContacts' :status='this.btnStatus' :data='userData' :storage='this.store'></saveBtnComponent>
            </template>
           
        </v-card-item>
        <v-container>
        <v-row>
            <v-col :cols="12" :md="6">
                <contactInput label="First name" type="name" :disabled='false' @update='saveFirstNameValue'></contactInput>
            </v-col>
            <v-col :cols="12" :md="6">
                <contactInput label="Last name" type="name" :disabled='false' @update='saveLastNameValue'></contactInput>
            </v-col>
            <v-col :cols="12" :md="6">
                <contactInput label="Email" type="email" :disabled='false' @update='saveEmailValue'></contactInput>
            </v-col>
            <v-col :cols="12" :md="6">

                <contactInput label="Phone" type="phone" :disabled='false' @update='savePhoneValue'></contactInput>
            </v-col>

        </v-row>
        
    </v-container>
    </v-card>
    
</template>
<script>
import saveBtnComponent from './saveBtnComponent.vue';
import contactInput from '../../inputs/contactInput.vue';
export default {

    components:{
        saveBtnComponent,
        contactInput
    },
    props:{
        store: Object
    },

    data() {
        return {
            userData:{
                firstName: '',
                lastName: '',
                email:'',
                phone:'',
            },
            
            valids:{
                firstname:false,
                lastname:false,
                email:false,
                phone:false
            }
        }
    },
    methods:{
        savePhoneValue(content){
            this.userData.phone = content.value
            this.valids.phone = content.valid
        },
        saveEmailValue(content){
            this.userData.email = content.value
            this.valids.email = content.valid
        },
        saveFirstNameValue(content){
            this.userData.firstName = content.value
            this.valids.firstname = content.valid
        },
        saveLastNameValue(content){
            this.userData.lastName = content.value
            this.valids.lastname = content.valid
        }
    },

    computed:{
        btnStatus(){
            if (this.valids.firstname && this.valids.lastname && this.valids.email && this.valids.phone){
                return false
            }
            return true
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