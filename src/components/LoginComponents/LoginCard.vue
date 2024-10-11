<script lang="ts">
import {defineComponent} from 'vue'
import UserDetailsInput from "@/components/inputs/UserDetailsInput.vue";
import {useAccountStore} from "@/stores/account";
import { login } from '@/services/auth/login'







export default defineComponent({
  name: "LoginCard",
  components: {UserDetailsInput},
  setup(){
    const store = useAccountStore()
    return {store}
  },
  data() {
    return {
      password : '',
      email : '',
      valid : {
        psw : false,
        email : false
      },
      showMessage : false,
      messageContent : ''
    }
  },
  computed:{
    isValid(){
      return !(this.valid.psw && this.valid.email);

    }
  },
  methods:{
    async logInUser(){
      const res = await login({
        password : this.password,
        email : this.email,
      })
      if(res===null){
        this.showMessage  = true;
        this.messageContent = "Something went wrong";
        return;
      }
      if(res.status === 200){
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
    }
  }
})
</script>

<template>
  <v-card>

    <v-card-title class="card-title text-h4" primary-title>
      <div>
        Login into your account
      </div>
    </v-card-title>
    <v-container>
      <v-row>

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
            <v-btn color="success" class="btn" variant="text" :disabled='isValid' @click='logInUser'>Login</v-btn>

            <router-link
                to="register"
            >
              <v-btn color="info" class="btn" variant="text">Don`t have account?</v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>



  </v-card>
</template>

<style scoped>

</style>