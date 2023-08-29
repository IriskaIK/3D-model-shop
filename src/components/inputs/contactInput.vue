<template lang="">
    <v-text-field 
        :prefix="choosePrefix"
        :label="this.label"
        :type="isPsw ? 'password' : 'text'"
        
        required
        :rules='chooseType'
        v-model='value'
        :disabled='disabled'
        dirty
    ></v-text-field>
</template>
<script>
import {validatePassword, validateEmail, validateName, validatePhone} from './validators'
export default {
    props:{
        disabled : Boolean,
        type : String,
        label : String
    },
    data() {
        return {
            value : '',
            valid: false,
            nameRules: [
                value => {
                    const validation = validateName(value)
                    if(validation.valid){
                        this.valid = true
                        this.$emit('update', {value : this.value, valid: this.valid})
                        return true
                    }
                    this.$emit('update', {value : this.value, valid: this.valid})
                    return validation.msg
                }
            ],
            passwrodRules:[
                value => {
                    const validation = validatePassword(value)
                    if(validation.valid){
                        this.valid = true
                        this.$emit('update', {value : this.value, valid: this.valid})
                        return true
                    }
                    this.$emit('update', {value : this.value, valid: this.valid})
                    return validation.msg
                }
            ],
            
            emailRules: [
                value => {
                    const validation = validateEmail(value)
                    if(validation.valid){
                        this.valid = true
                        this.$emit('update', {value : this.value, valid: this.valid})
                        return true
                    }
                    this.$emit('update', {value : this.value, valid: this.valid})
                    return validation.msg
                },
               
            ],
            phoneNumberRules:[
                value =>{

                    const r =  /[0-9\s]|\./
                    if(!r.test(value.charAt(value.length - 1)) || value.length >= 12){
                        
                        this.value = this.value.slice(0, -1)
                    }
                    this.valid = false

                    const validation = validatePhone(value)
                    if(validation.valid){
                        this.valid = true
                        this.$emit('update', {value : this.value, valid: this.valid})
                        return true
                    }
                    this.$emit('update', {value : this.value, valid: this.valid})
                    return validation.msg
                }
            ]
        }
    },
    watch:{
        'value'(newValue, prevValue){
            if(this.type == 'phone'){
                let length = newValue.length
                if (newValue.length > prevValue.length){
                    if (length == 3 || length == 7){
                        this.value += ' '
                    }
                }
            }
            
            
        }
    },
    computed:{
        isPsw(){
            if(this.type == 'password'){
                return true
            }
            return false
        },
        chooseType(){
            if(this.type == 'phone'){
                return this.phoneNumberRules
            }
            if(this.type == 'email'){
                return this.emailRules
            }
            if(this.type == 'password'){
                return this.passwrodRules
            }
            
            return this.nameRules
            
        },
        choosePrefix(){
            if (this.type == 'phone'){
                return '+38'
            }
            return ''
        }
    }
}
</script>
<style lang="">
    
</style>