<template>
    <a class="topic-name" id="most-popular">
        {{this.topicName}}
    </a>
    <TopicItemComponent v-for="value in this.topicContent" :name="value.name" :BgImgSrc="value.src"  :linkTo="value.linkTo" :key="value.id"></TopicItemComponent>
</template>
<script>
import TopicItemComponent from './components/TopicItemComponent.vue'

export default {
    props:{
        topicName:String,
        topicContent:Array

    },
    components:{
        TopicItemComponent
    }
    
}
</script>
<style>
.topic-name{
    font-size: 90px;
    font-family: 'Bebas Neue', sans-serif;
}
</style>