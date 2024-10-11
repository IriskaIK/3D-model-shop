<script lang="ts">
import { defineComponent } from 'vue'
import DeliveryDetails from '@/components/AccountComponents/UserDetailsTab/components/DeliveryDetails.vue'
import UserDetails from '@/components/AccountComponents/UserDetailsTab/components/UserDetails.vue'

export default defineComponent({
  name: 'UserDetailsTab',
  components: { UserDetails, DeliveryDetails }
})
</script>

<template>
  <UserDetails></UserDetails>

  <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

  <DeliveryDetails></DeliveryDetails>

</template>

<style scoped>

</style>