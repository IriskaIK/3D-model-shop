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
            <v-col cols='12' md='6'>
                <v-text-field
                v-model="userData.firstname"
                :rules="firstNameRules"
                label="First name"
                required
                ></v-text-field>
            </v-col>
            <v-col cols='12' md='6'>
                <v-text-field
                v-model="userData.lastname"
                :rules="lastNameRules"
                label="Last name"
                required
                ></v-text-field>
            </v-col>
            <v-col cols='12' md='6' class='d-flex'>
                
                
                
                <v-text-field 
                prefix="+38"
                label="Phone number"
                
                required
                :rules=phoneNumberRules
                v-model='userData.phone'
                dirty
                ></v-text-field>
            </v-col>
            <v-col cols='12' md='6'>
                <v-text-field
                v-model="userData.email"
                type="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>
            </v-col>

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
    props:{
        store: Object
    },

    data() {
        return {
            userData:{
                firstname: '',
                lastname: '',
                email:'',
                phone:'',
            },
            
            valids:{
                firstname:false,
                lastname:false,
                email:false,
                phone:false
            },
            firstNameRules: [
                value => {
                    if (value) return true

                    return 'Name is required.'
                },
                value => {
                    if (value?.length >= 2){
                        this.valids.firstname = true
                        return true
                    } 
                    this.valids.firstname = false
                    return false
                },
            ],
            lastNameRules:[
                value => {
                    if (value) return true

                    return 'Name is required.'
                },
                value => {
                    if (value?.length >= 2){
                        this.valids.lastname = true
                        return true
                    } 
                    this.valids.lastname = false
                    return false
                },
            ],

            emailRules: [
                value => {
                    if (value) return true

                    return 'E-mail is required.'
                },
                value => {
                    if (/.+@.+\..+/.test(value)){
                        this.valids.email = true
                        return true
                    } 
                    this.valids.email = false
                    return 'E-mail must be valid.'
                },
            ],
            phoneNumberRules:[
                value =>{
                    if (value) return true
                    return 'Phone number is required'
                },
                value =>{
                    let r = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
                    if (r.test(value)){
                        this.valids.phone = true
                        return true
                    } 

                    r =  /[0-9\s]|\./
                    if(!r.test(value.charAt(value.length - 1)) || value.length >= 12){
                        
                        this.userData.phone = this.userData.phone.slice(0, -1)
                    }
                    this.valids.phone = false
                    return 'Phone number must be valid'
                }
            ]
        }
    },
    methods:{
        
    },
    watch:{
        'userData.phone'(newValue, prevValue){
            let length = newValue.length
            if (newValue.length > prevValue.length){
                if (length == 3 || length == 7){
                    this.userData.phone += ' '
                }
            }
            
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