<script lang="ts">
import { defineComponent } from 'vue'
import getOrders, {Order} from "@/services/orders/getOrders";

interface OrderTab{
  orders : Order[]
}


export default defineComponent({
  name: 'OrdersTab',
  data() : OrderTab{
    return {
      orders : [],
    }
  },
  setup(){

  },
  async beforeMount() {
    const data = await getOrders();
    if(data){
      this.orders = data;
    }
  }
})
</script>

<template>
  <v-list>

    <v-list-item v-for="item in orders">

      <v-card variant="tonal">
        <v-card-item>
          <v-card-title>{{ new Date(item.created_at).toLocaleString()}}</v-card-title>

          <v-card-subtitle>
            <div>Status : {{item.orderStatus.status}}</div>
            <div>Total price : {{item.total_price}}$</div>

          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-list>
            <v-list-item v-for="product in item.orderItems">
              <v-card variant="elevated">
                <v-card-item>
                  <v-card-title> <router-link :to="`product/${product.prod_id}`"> {{product.title}} #{{product.prod_id}}</router-link></v-card-title>
                  <v-card-subtitle>
                    {{product.price}}$ x{{product.quantity}}
                  </v-card-subtitle>
                </v-card-item>

              </v-card>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>

    </v-list-item>

  </v-list>
</template>

<style scoped>

</style>