<script lang="ts">
import {defineComponent} from 'vue'
import RegisterCard from "@/components/RegisterComponents/RegisterCard.vue";

export default defineComponent({
  name: "RegisterView",
  components: {RegisterCard}
})
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col md="4">
        <RegisterCard></RegisterCard>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>

</style>