<template>
    <infoCardComponent title='Personal info' icon='mdi-card-account-mail' v-slot="slotProps" :validInput="validInputs" @saveData="saveData()">
        <v-col :cols="12" :md="6">
            <contactInput label="First name" type="name" :disabled='!slotProps.editing' @update='saveFirstNameValue' :defaultValue="personalInfo.first_name"></contactInput>
        </v-col>
        <v-col :cols="12" :md="6">
            <contactInput label="Last name" type="name" :disabled='!slotProps.editing' @update='saveLastNameValue' :defaultValue="personalInfo.last_name"></contactInput>
        </v-col>
        <v-col :cols="12" :md="6">
            <contactInput label="Email" type="email" :disabled='!slotProps.editing' @update='saveEmailValue' :defaultValue="personalInfo.email"></contactInput>
        </v-col>
        <v-col :cols="12" :md="6">

            <contactInput label="Phone" type="phone" :disabled='!slotProps.editing' @update='savePhoneValue' :defaultValue="personalInfo.phone"></contactInput>
        </v-col>
           
    </infoCardComponent>
</template>
<script>
import infoCardComponent from './infoCardComponent.vue';
import contactInput from '../../../inputs/contactInput.vue';
import {useAccountStore} from '../../../../stores/account'
import {updatePersonalInfo} from '../../../../services/accountDetails/updateAccountDetails'
export default {
    setup() {
    const accountStore = useAccountStore()
    return { accountStore}
     },
    components:{
        infoCardComponent,
        contactInput
    },
    data() {
        return {
            personalInfo: this.accountStore.getProfileData,
            valids:{
                firstname:true,
                lastname:true,
                email:true,
                phone:true
            },
            
        }
    },
    methods:{
        savePhoneValue(content){
            this.personalInfo.phone = content.value
            this.valids.phone = content.valid
        },
        saveEmailValue(content){
            this.personalInfo.email = content.value
            this.valids.email = content.valid
        },
        saveFirstNameValue(content){
            this.personalInfo.first_name = content.value
            this.valids.firstname = content.valid
        },
        saveLastNameValue(content){
            this.personalInfo.last_name = content.value
            this.valids.lastname = content.valid
        },
        saveData(){
            updatePersonalInfo(this.personalInfo)
        }
    },
    computed:{
        validInputs(){
            if(this.valids.firstname && this.valids.lastname && this.valids.email && this.valids.phone){
                return true
            }
            return false
        }
    }
}
</script>
<style>
    
</style>