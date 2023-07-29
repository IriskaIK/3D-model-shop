<template>
    <v-list-item
            :prepend-avatar=this.avatar
            :title=this.name
            :subtitle=this.email
    ></v-list-item>
</template>
<script>
export default {
    props:{
        avatar: String,
        name: String,
        email: String
    }
    
}
</script>
<style lang="">
    
</style>