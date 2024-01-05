<script>

export default {
  props:{
    src:String
  },
  methods:{
    getImagePath(){
      return "http://localhost:3000/uploads/" + this.src
    }
  }
}

</script>

<template>
  <v-carousel
      max-height="600px"
      show-arrows="hover">
    <v-carousel-item
        :src="getImagePath()"
        cover
    ></v-carousel-item>

    <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
    ></v-carousel-item>

    <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
    ></v-carousel-item>
  </v-carousel>
</template>

<style scoped>

</style>