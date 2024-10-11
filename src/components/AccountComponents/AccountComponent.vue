<script lang="ts">
import { defineComponent } from 'vue'
import OrdersTab from '@/components/AccountComponents/OrdersTab/OrdersTab.vue'
import WishlistTab from '@/components/AccountComponents/WishlistTab/WishlistTab.vue'
import UserDetailsTab from '@/components/AccountComponents/UserDetailsTab/UserDetailsTab.vue'

export default defineComponent({
  name: 'AccountComponent',
  components: { UserDetailsTab, WishlistTab, OrdersTab },
  data() {
    return {
      tab: null
    }
  },
})
</script>

<template>
  <v-card>
    <v-tabs v-model="tab" color="primary" dark align-tabs="center" slider-color="primary">
      <v-tab :value="1">Personal info</v-tab>
      <v-tab :value="2">My orders</v-tab>
      <v-tab :value="3">Wishlist</v-tab>

    </v-tabs>


    <v-window v-model="tab">
      <v-window-item :value="1">
        <v-container>
          <v-row>
            <v-col :cols="12" :md="8" style="margin: auto;">
              <UserDetailsTab></UserDetailsTab>
            </v-col>
          </v-row>

        </v-container>

      </v-window-item>
      <v-window-item :value="2">
        <v-container>
          <v-row>
            <v-col :cols="12" :md="8" style="margin: auto;">
              <OrdersTab></OrdersTab>
            </v-col>
          </v-row>

        </v-container>

      </v-window-item>
      <v-window-item :value="3">
        <v-container>
          <v-row>
            <v-col :cols="12" :md="8" style="margin: auto;">
              <WishlistTab></WishlistTab>
            </v-col>
          </v-row>
        </v-container>

      </v-window-item>
    </v-window>


  </v-card>
</template>

<style scoped>

</style>