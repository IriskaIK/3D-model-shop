<script lang="ts">
import {defineComponent} from 'vue'
import UserDetailsInput from "@/components/inputs/UserDetailsInput.vue";
import {useAccountStore} from "@/stores/account";
import { register } from '@/services/auth/register'

export default defineComponent({
  name: "RegisterCard",
  components: {UserDetailsInput},
  setup(){
    const store = useAccountStore()
    return {store}
  },
  data() {
    return {
      password : '',
      email : '',
      name : '',
      valid : {
        psw : false,
        email : false,
        name : false
      },
      showMessage : false,
      messageContent : ''
    }
  },
  computed:{
    isValid(){
      return !(this.valid.psw && this.valid.email && this.valid.name);

    }
  },
  methods:{
    async registerUser(){
      const res = await register({
        password : this.password,
        email : this.email,
        first_name : this.name
      })
      if(res===null){
        this.showMessage  = true;
        this.messageContent = "Something went wrong";
        return;
      }
      if(res.status === 201){
        this.$router.push('/')
      }else if(res.status){
        this.showMessage = true
        this.messageContent = res.msg
      }

    },
    saveEmailValue(content : {value : string, valid : boolean}){
      if(content.valid){
        this.email = content.value

      }
      this.valid.email = content.valid
    },
    savePswValue(content : {value : string, valid : boolean}){
      if(content.valid){
        this.password = content.value

      }
      this.valid.psw = content.valid
    },
    saveNameValue(content: {value : string, valid : boolean}){
      if(content.valid){
        this.name = content.value
      }
      this.valid.name = content.valid
    }
  }
})
</script>

<template>
<!--  TODO: Inform that user already exists-->
  <v-card>

    <v-card-title class="card-title text-h4" primary-title>
      <div>
        Create your account
      </div>
    </v-card-title>
    <v-container>
      <v-row>

        <v-col cols="12">
          <UserDetailsInput label="Name"  @update='saveNameValue'></UserDetailsInput>
        </v-col>

        <v-col cols="12">
          <UserDetailsInput type="email" label="E-mail"  @update='saveEmailValue'></UserDetailsInput>
        </v-col>

        <v-col cols="12">
          <UserDetailsInput type="password" label="Password"  @update='savePswValue'></UserDetailsInput>
        </v-col>

        <v-col cols='12' v-if="showMessage">
          {{ messageContent }}
        </v-col>

        <v-col cols='12'>
          <div class="btn-holder">
            <v-btn color="success" class="btn" variant="text" :disabled='isValid' @click='registerUser'>Register</v-btn>

            <router-link
                to="login"
            >
              <v-btn color="info" class="btn" variant="text">Already have account?</v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>



  </v-card>
</template>

<style scoped>

</style>