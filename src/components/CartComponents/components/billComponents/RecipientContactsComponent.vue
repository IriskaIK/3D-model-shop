<script lang="ts">
import { defineComponent } from 'vue'
import SaveBtn from '@/components/CartComponents/components/billComponents/SaveBtn.vue'
import UserDetailsInput from '@/components/inputs/UserDetailsInput.vue'
import { useBillStore } from '@/stores/bill'

export default defineComponent({
  name: 'RecipientContactsComponent',
  components: { UserDetailsInput, SaveBtn },
  data() {
    return {
      userData:{
        firstname: '',
        lastname: '',
        phone:'',
      },

      valids:{
        firstname:false,
        lastname:false,
        phone:false
      }
    }
  },
  methods:{
    savePhoneValue(content : {value : string, valid : boolean}){
      this.userData.phone = content.value
      this.valids.phone = content.valid
    },
    saveFirstNameValue(content : {value : string, valid : boolean}){
      this.userData.firstname = content.value
      this.valids.firstname = content.valid
    },
    saveLastNameValue(content : {value : string, valid : boolean}){
      this.userData.lastname = content.value
      this.valids.lastname = content.valid
    }
  },
  watch:{

  },
  computed:{
    btnStatus(){
      return !(this.valids.firstname && this.valids.lastname && this.valids.phone);

    }
  },
  setup(){
    const store = useBillStore()
    return {store}
  },
})
</script>

<template>
  <v-card>
    <v-card-item prepend-icon='mdi-numeric-4-circle' >
      <v-card-title>
        Recipient contacts
      </v-card-title>
      <template v-slot:append>
        <SaveBtn from='recipientContacts' :status='btnStatus' :data='userData'></SaveBtn>
      </template>

    </v-card-item>
    <v-container>
      <v-row>
        <v-col :cols="12" :md="6">
          <UserDetailsInput label="First name" type="name" :disabled='false' @update='saveFirstNameValue'></UserDetailsInput>
        </v-col>
        <v-col :cols="12" :md="6">
          <UserDetailsInput label="Last name" type="name" :disabled='false' @update='saveLastNameValue'></UserDetailsInput>
        </v-col>
        <v-col :cols="12" :md="6">
          <UserDetailsInput label="Phone" type="phone" :disabled='false' @update='savePhoneValue'></UserDetailsInput>
        </v-col>

      </v-row>

    </v-container>
  </v-card>
</template>

<style scoped>

</style>