<script lang="ts">
import {defineComponent} from 'vue'
import AccountComponent from '@/components/AccountComponents/AccountComponent.vue'

export default defineComponent({
  name: "AccountView",
  components: { AccountComponent }
})
</script>

<template>
  <AccountComponent></AccountComponent>

  <v-divider :thickness="3" class="border-opacity-25 divider-item" style="margin: 3% 0;"></v-divider>
  <v-footer >
    <div class="px-4 py-2 text-center w-100">
      {{ new Date().getFullYear() }} — <strong>TestApp</strong>
    </div>
  </v-footer>
</template>

<style scoped>

</style>