<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'addToWishlistBtn',
  props:{
    isInWishList  : Boolean
  },
  emits:{
    wishlistBtn : null
  },
  data() {
    return {
      addToLikedSnackBar: false
    }
  },
  methods:{
    addToWishlist(){
      this.addToLikedSnackBar = true
      this.$emit('wishlistBtn')
    }
  }
})
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn variant="outlined" ripple icon="mdi-heart" size="35" class="add-btn"
           :class="{'add-btn-hover': isHovering || isInWishList}"
           :disabled = 'isInWishList'
           v-bind="props"
           @click="addToWishlist()">

    </v-btn>
  </v-hover>


  <v-snackbar
    v-model="addToLikedSnackBar"
    :timeout="2000"
  >
    Added to wishlist

    <template v-slot:actions>
      <v-btn
        color="pink"
        variant="text"
        @click="addToLikedSnackBar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>
.add-btn-hover{
  color: green;
}
.add-btn{
  transition: color .1s ease-in;
}
</style>