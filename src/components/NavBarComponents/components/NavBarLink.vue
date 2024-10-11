<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NavBarLink", props: {
    title: String,
    value: String,
    icon: String,
    link: String,
    badge: Boolean
  }


})
</script>

<template>
  <router-link :to="this.link" style="text-decoration: none; color: inherit;">
    <v-list-item
        :title=this.title
        :value=this.value
        :prepend-icon="this.icon">
      <template v-slot:prepend>
        <v-badge v-if='this.badge' dot floating>
          <v-icon :icon=this.icon></v-icon>
        </v-badge>
        <v-icon v-else :icon=this.icon></v-icon>
      </template>
    </v-list-item>
  </router-link>
</template>

<style scoped>

</style>