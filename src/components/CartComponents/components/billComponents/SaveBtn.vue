<script lang="ts">
import { defineComponent } from 'vue'
import { useBillStore } from '@/stores/bill'

export default defineComponent({
  name: 'SaveBtn',
  data() {
    return {
      isSaved:false
    }
  },
  setup(){
    const store = useBillStore()
    return {store}
  },
  props:{
    data : Object,
    from: String,
    status: Boolean
  },
  methods: {
    saveData(){
      if(this.isSaved){
        return
      }
      let data = {
        ...this.data,
        status : true
      }
      this.store.$patch({
        [this.from as string] : data
      })
      this.isSaved = true
    }
  },
  watch:{
    data : {
      handler(newValue, oldValue){
        this.isSaved = false
        this.store.$patch({
            [this.from as string]: {status:false}
          }
        )
      },
      deep: true
    }
  }
})
</script>

<template>
  <v-btn color="" :disabled='status' @click='saveData()'>

    <v-icon v-if='isSaved' icon="mdi-check-circle"></v-icon>

    <div v-else>Confirm</div>

  </v-btn>
</template>

<style scoped>

</style>