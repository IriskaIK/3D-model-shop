<template lang="">
    <router-link :to=this.link
    style="text-decoration: none; color: inherit;"
    >
    <v-list-item
            
            :title=this.title
            :value=this.value
            :prepend-icon="this.icon"
    >
        <template v-slot:prepend>
            <v-badge v-if='this.badge' dot floating class='badge-icon'>
                <v-icon  :icon=this.icon ></v-icon>
            </v-badge>
            <v-icon v-else :icon=this.icon></v-icon>
        </template>

 


</v-list-item>
</router-link>
   
</template>
<script>
export default {
    props:{
        title: String,
        value: String,
        icon : String,
        link: String,
        badge: Boolean
    }
}
</script>
<style scoped>
.badge-icon{
    margin-inline-end:32px;
}

</style>