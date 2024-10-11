<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DeliveryInput',
  props:{
    items : Array,
    disabled : Boolean,
    label : String,
    defaultValue : String
  },
  data() {
    return {
      value : this.defaultValue || ''
    }
  },
  methods:{
    setValue(){
      if(this.value != ''){
        this.$emit('update', {value : this.value, valid : true})
      }else{
        this.$emit('update', {value : this.value, valid : false})
      }
    }
  }
})
</script>

<template>
  <v-autocomplete
    v-model="value"
    :disabled='disabled'

    @update:modelValue='setValue()'

    :label="label"
    :items="items"
  ></v-autocomplete>
</template>

<style scoped>

</style>