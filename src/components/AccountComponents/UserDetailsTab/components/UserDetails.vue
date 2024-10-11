<script lang="ts">
import { defineComponent } from 'vue'
import { useAccountStore } from '@/stores/account'
import DetailsContainer from '@/components/AccountComponents/UserDetailsTab/components/DetailsContainer.vue'
import UserDetailsInput from '@/components/inputs/UserDetailsInput.vue'
import User from '@/types/user.types'
export default defineComponent({
  name: 'userDetails',
  components: { UserDetailsInput, DetailsContainer },
  setup() {
    const accountStore = useAccountStore()
    return { accountStore}
  },
  beforeMount() {
    const profileData = this.accountStore.getProfileData
    if(profileData){
      this.personalInfo = {phone: profileData.phone, email: profileData.email, first_name: profileData.first_name, last_name: profileData.last_name}
    }
  },
  data() {
    return {
      personalInfo: {
        phone : '',
        email : '',
        first_name : '',
        last_name : '',
      },
      valids:{
        firstname:true,
        lastname:true,
        email:true,
        phone:true
      },

    }
  },
  methods:{
    savePhoneValue(content : {value : string, valid : boolean}){
      this.personalInfo.phone = content.value
      this.valids.phone = content.valid
    },
    saveEmailValue(content : {value : string, valid : boolean}){
      this.personalInfo.email = content.value
      this.valids.email = content.valid
    },
    saveFirstNameValue(content : {value : string, valid : boolean}){
      this.personalInfo.first_name = content.value
      this.valids.firstname = content.valid
    },
    saveLastNameValue(content : {value : string, valid : boolean}){
      this.personalInfo.last_name = content.value
      this.valids.lastname = content.valid
    },
    saveData(){
      this.accountStore.updateUserData(this.personalInfo)
    }
  },
  computed:{
    validInputs(){
      return this.valids.firstname && this.valids.lastname && this.valids.email && this.valids.phone;

    }
  }
})
</script>

<template>
  <DetailsContainer title='Personal info' icon='mdi-card-account-mail' v-slot="slotProps" :validInput="validInputs" @saveData="saveData()">
    <v-col :cols="12" :md="6">
      <UserDetailsInput label="First name" type="name" :disabled='!slotProps.editing' @update='saveFirstNameValue' :defaultValue="personalInfo.first_name"></UserDetailsInput>
    </v-col>
    <v-col :cols="12" :md="6">
      <UserDetailsInput label="Last name" type="name" :disabled='!slotProps.editing' @update='saveLastNameValue' :defaultValue="personalInfo.last_name"></UserDetailsInput>
    </v-col>
    <v-col :cols="12" :md="6">
      <UserDetailsInput label="Email" type="email" :disabled='!slotProps.editing' @update='saveEmailValue' :defaultValue="personalInfo.email"></UserDetailsInput>
    </v-col>
    <v-col :cols="12" :md="6">
      <UserDetailsInput label="Phone" type="phone" :disabled='!slotProps.editing' @update='savePhoneValue' :defaultValue="personalInfo.phone"></UserDetailsInput>
    </v-col>

  </DetailsContainer>
</template>

<style scoped>

</style>