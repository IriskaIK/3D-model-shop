<script lang="ts">
import { defineComponent } from 'vue'
import { validateEmail, validateName, validatePassword, validatePhone } from '@/utils/userDetailsValidator'

export default defineComponent({
  name: 'UserDetailsInput',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: String,
    label: String,
    defaultValue: String
  },
  data() {
    return {
      value: this.defaultValue || '',
      valid: false,
      nameRules: [
        (value: string) => {
          const validation = validateName(value)
          if (validation.valid) {
            this.changeValid(true)
            this.$emit('update', { value: this.value, valid: this.valid })
            return true
          }
          this.$emit('update', { value: this.value, valid: this.valid })
          return validation.msg
        }
      ],
      passwrodRules: [
        (value: string) => {
          const validation = validatePassword(value)
          if (validation.valid) {
            this.changeValid(true)
            this.$emit('update', { value: this.value, valid: this.valid })
            return true
          }
          this.$emit('update', { value: this.value, valid: this.valid })
          return validation.msg
        }
      ],

      emailRules: [
        (value: string) => {
          const validation = validateEmail(value)
          if (validation.valid) {
            this.changeValid(true)
            this.$emit('update', { value: this.value, valid: this.valid })
            return true
          }
          this.$emit('update', { value: this.value, valid: this.valid })
          return validation.msg
        }

      ],
      phoneNumberRules: [
        (value: string) => {

          const r = /[0-9\s]|\./
          if (!r.test(value.charAt(value.length - 1)) || value.length >= 13) {

            this.sliceValue()
          }
          this.changeValid(false)

          const validation = validatePhone(value)
          if (validation.valid) {
            this.changeValid(true)
            this.$emit('update', { value: this.value, valid: this.valid })
            return true
          }
          this.$emit('update', { value: this.value, valid: this.valid })
          return validation.msg
        }
      ]
    }
  },
  methods : {
    changeValid(valid : boolean){
      this.valid = valid
    },
    sliceValue(){
      if(this.value) this.value = this.value.slice(0, -1)
    }
  },
  watch: {
    'value'(newValue, prevValue) {
      if (this.type == 'phone') {
        let length = newValue.length
        if (newValue.length > prevValue.length) {
          if (length == 3 || length == 7) {
            this.value += ' '
          }
        }
      }


    }
  },
  computed: {
    isPsw() {
      return this.type == 'password'

    },
    chooseType() {
      if (this.type == 'phone') {
        return this.phoneNumberRules
      }
      if (this.type == 'email') {
        return this.emailRules
      }
      if (this.type == 'password') {
        return this.passwrodRules
      }

      return this.nameRules

    },
    choosePrefix() {
      if (this.type == 'phone') {
        return '+38'
      }
      return ''
    },
  }
})
</script>

<template>
  <v-text-field
    :prefix="choosePrefix"
    :label="label"
    :type="isPsw ? 'password' : 'text'"

    required
    :rules='chooseType'
    v-model='value'
    :disabled='disabled'
    dirty
  ></v-text-field>
</template>

<style scoped>

</style>