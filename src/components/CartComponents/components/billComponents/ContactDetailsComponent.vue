<script lang="ts">
import { defineComponent } from 'vue'
import UserDetailsInput from '@/components/inputs/UserDetailsInput.vue'
import SaveBtn from '@/components/CartComponents/components/billComponents/SaveBtn.vue'
import { useBillStore } from '@/stores/bill'
import {useAccountStore} from "@/stores/account";

export default defineComponent({
  name: 'ContactDetailsComponent',
  components: { SaveBtn, UserDetailsInput },
  setup(){
    const store = useBillStore()
    const accountStore = useAccountStore()

    return {store, accountStore}
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
    savePhoneValue(content : {value : string, valid : boolean}){
      this.userData.phone = content.value
      this.valids.phone = content.valid
    },
    saveEmailValue(content : {value : string, valid : boolean}){
      this.userData.email = content.value
      this.valids.email = content.valid
    },
    saveFirstNameValue(content : {value : string, valid : boolean}){
      this.userData.firstName = content.value
      this.valids.firstname = content.valid
    },
    saveLastNameValue(content : {value : string, valid : boolean}){
      this.userData.lastName = content.value
      this.valids.lastname = content.valid
    }
  },

  computed:{
    btnStatus(){
      return !(this.valids.firstname && this.valids.lastname && this.valids.email && this.valids.phone);

    }
  }
})
</script>

<template>
  <v-card>
    <v-card-item prepend-icon='mdi-numeric-1-circle' >
      <v-card-title>
        Your contacts
      </v-card-title>
      <template v-slot:append>
        <SaveBtn from='userContacts' :status='btnStatus' :data='userData'></SaveBtn>
      </template>

    </v-card-item>
    <v-container>
      <v-row>
        <v-col :cols="12" :md="6">
          <UserDetailsInput :default-value="accountStore.profileData?.first_name!" label="First name" type="name" :disabled='false' @update='saveFirstNameValue'></UserDetailsInput>
        </v-col>
        <v-col :cols="12" :md="6">
          <UserDetailsInput :default-value="accountStore.profileData?.last_name!" label="Last name" type="name" :disabled='false' @update='saveLastNameValue'></UserDetailsInput>
        </v-col>
        <v-col :cols="12" :md="6">
          <UserDetailsInput :default-value="accountStore.profileData?.email!" label="Email" type="email" :disabled='false' @update='saveEmailValue'></UserDetailsInput>
        </v-col>
        <v-col :cols="12" :md="6">

          <UserDetailsInput :default-value="accountStore.profileData?.phone!" label="Phone" type="phone" :disabled='false' @update='savePhoneValue'></UserDetailsInput>
        </v-col>

      </v-row>

    </v-container>
  </v-card>
</template>

<style scoped>

</style>