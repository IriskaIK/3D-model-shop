<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NavBarAvatar",
  props:{
    avatar: String,
    name: String,
    email: String
  }
})
</script>

<template>
  <v-list-item
      :prepend-avatar=this.avatar
      :title=this.name
      :subtitle=this.email
  ></v-list-item>
</template>

<style scoped>

</style>