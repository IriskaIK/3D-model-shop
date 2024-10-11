<script lang="ts">
import {defineComponent} from 'vue'
import LoginCard from "@/components/LoginComponents/LoginCard.vue";

export default defineComponent({
  name: "LoginView",
  components: {LoginCard}
})
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col md="4">
        <LoginCard></LoginCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>