<script lang="ts">
import {defineComponent, PropType} from 'vue'
import TopicItemComponent from "@/components/HomeComponents/components/TopicItemComponent.vue";

interface TopicItem {
  name: string;
  src: string;
  linkTo: string;
}

export default defineComponent({
  name: "TopicComponent",
  components: {TopicItemComponent},
  props:{
    topicName: {
      type: String,
      required: true
    },
    topicContent: {
      type: Array as PropType<TopicItem[]>,
      required: true
    }

  },
})
</script>

<template>
  <div class="topic-name" id="most-popular">
    {{topicName}}
  </div>
  <TopicItemComponent v-for="value in topicContent" :name="value.name" :BgImgSrc="value.src"  :linkTo="value.linkTo" :key="value.id"></TopicItemComponent>
</template>

<style scoped>
.topic-name{
  font-size: 90px;
  font-family: 'Bebas Neue', sans-serif;
}
</style>