<template>
    <v-card>

        <v-card-title class="card-title text-h4" primary-title>
            <div>
                Create your account
            </div>
        </v-card-title>
        <v-container>
            <v-row>

                <v-col cols="12">
                    <ContactInput label="Name"  @update='saveNameValue'></ContactInput>
                </v-col>

                <v-col cols="12">
                    <ContactInput type="email" label="E-mail"  @update='saveEmailValue'></ContactInput>
                </v-col>
                
                <v-col cols="12">
                    <ContactInput type="password" label="Password"  @update='savePswValue'></ContactInput>
                </v-col>

                <v-col cols='12' v-if="this.showMessage">
                    {{ this.messageContent }}
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
<script>
import ContactInput from '../inputs/contactInput.vue';
import { useAccountStore } from '../../stores/account';

export default {
    setup(){
        const store = useAccountStore()
        return {store}
    },
    components:{
        ContactInput
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
            if(this.valid.psw & this.valid.email & this.valid.name){
                return false
            }
            return true
        }
    },
    methods:{
        async registerUser(){
            const res = await this.store.regUser({
                password : this.password,
                email : this.email,
                first_name : this.name
            })
            if(res.status === 201){
                this.$router.push('/')
            }else if(res.status === 400){
                this.showMessage = true
                this.messageContent = res.msg
            }



        },
        saveEmailValue(content){
            if(content.valid){
                this.email = content.value
                
            }
            this.valid.email = content.valid
        },
        savePswValue(content){
            if(content.valid){
                this.password = content.value
                
            }
            this.valid.psw = content.valid
        },
        saveNameValue(content){
            if(content.valid){
                this.name = content.value
            }
            this.valid.name = content.valid
        }
    }
}
</script>
<style scoped>
.card-title{
    text-align: center; 
    font-weight: 500;
    margin: 10px 0;
    white-space: normal;
    
}

.btn{
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>