<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DetailsContainer',
  props:{
    title: String,
    icon: String,
    validInput : Boolean
  },
  data() {
    return {
      content : {},
      isEditing : false,
    }
  },
  methods: {
    editData(){
      this.isEditing = true
    },
    saveData(){
      this.$emit('saveData')
      this.isEditing = false
    }
  },
  computed:{
    isValid(){
      if (this.validInput && this.isEditing){
        return false
      }
      return true
    }
  }
})
</script>

<template>
  <v-card variant="plain" :title="title" :prepend-icon="icon">
    <v-container>
      <v-row>

        <slot :editing="isEditing"></slot>

      </v-row>

    </v-container>

    <v-card-actions>
      <v-btn :disabled="isValid" color="success" @click="saveData()">Save</v-btn>
      <v-btn :disabled="isEditing" color="success" @click="editData()">Edit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>