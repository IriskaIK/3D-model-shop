<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Region} from "@/services/delivery/getRegions";

export default defineComponent({
  name: 'DeliveryInput',
  props:{
    items : {type :Array as PropType<Array<any> | undefined>, required: true},
    disabled : Boolean,
    label : String,
    defaultValue : Object,
    itemTitle : String,
  },
  data() {
    return {
      value : this.defaultValue || ''
    }
  },
  methods:{
    setValue(){
      console.log(this.value)
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
    :item-title="itemTitle ? itemTitle : 'name'"
    item-value="id"
    :return-object="true"
  ></v-autocomplete>
</template>

<style scoped>

</style>