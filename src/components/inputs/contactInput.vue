<template lang="">
    <v-text-field 
        :prefix="choosePrefix"
        :label="this.label"
        
        required
        :rules='chooseType'
        v-model='value'
        :disabled='disabled'
        dirty
    ></v-text-field>
</template>
<script>
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
                    if (value){
                        this.$emit('update', {value : this.value, valid: this.valid})

                        return true
                    } 
                    this.$emit('update', {value : this.value, valid: this.valid})
                    return 'Name is required.'
                },
                value => {
                    if (value?.length >= 2){
                        this.valid = true
                        this.$emit('update', {value : this.value, valid: this.valid})

                        return true
                    } 
                    this.valid = false
                    this.$emit('update', {value : this.value, valid: this.valid})

                    return false
                },
            ],
            
            emailRules: [
                value => {
                    if (value){
                        this.$emit('update', {value : this.value, valid: this.valid})

                        return true
                    } 
                    this.$emit('update', {value : this.value, valid: this.valid})
                    return 'E-mail is required.'
                },
                value => {
                    if (/.+@.+\..+/.test(value)){
                        this.valid = true
                        this.$emit('update', {value : this.value, valid: this.valid})

                        return true
                    } 
                    this.valid = false
                    this.$emit('update', {value : this.value, valid: this.valid})
                    return 'E-mail must be valid.'
                },
            ],
            phoneNumberRules:[
                value =>{
                    if (value){
                        this.$emit('update', {value : this.value, valid: this.valid})
                        return true
                    } 
                    this.$emit('update', {value : this.value, valid: this.valid})

                    return 'Phone number is required'
                },
                value =>{
                    let r = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
                    if (r.test(value)){
                        this.valid = true
                        this.$emit('update', {value : this.value, valid: this.valid})
                        return true
                    } 

                    r =  /[0-9\s]|\./
                    if(!r.test(value.charAt(value.length - 1)) || value.length >= 12){
                        
                        this.value = this.value.slice(0, -1)
                    }
                    this.valid = false

                    this.$emit('update', {value : this.value, valid: this.valid})
                    return 'Phone number must be valid'
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
        chooseType(){
            if(this.type == 'phone'){
                return this.phoneNumberRules
            }
            if(this.type == 'email'){
                return this.emailRules
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