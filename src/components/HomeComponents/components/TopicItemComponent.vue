<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TopicItemComponent",
  props: {
    name: String,
    BgImgSrc: String,
    linkTo: String
  }
})
</script>

<template>
  <v-card height="500px" :hover="true" v-ripple="true" class="card-item" :to="this.linkTo">
    <template v-slot:image>
      <v-parallax :src="this.BgImgSrc"></v-parallax>
    </template>

    <template v-slot:default>
      <div class="container">
        {{ this.name }}

      </div>
    </template>
  </v-card>
  <v-divider :thickness="3" class="border-opacity-25 divider-item"></v-divider>
</template>

<style scoped>
.divider-item {
  margin: 3% 0;
}

.container {

  font-family: 'Bebas Neue', sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 80px;
  background-color: rgba(0, 0, 0, 0.322);
  color: white;
}

</style>