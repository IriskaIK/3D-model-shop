<template lang="">
    <v-list-item
        width="80%"
        :ripple="false"
        append-icon="mdi-eye"
        variant='tonal'
        rounded='lg'
        >
            <template v-slot:title>
                Something 
            </template>
            <template v-slot:subtitle>
                20 USD
            </template>
    </v-list-item>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .bill-item{
        margin:auto; 
        margin-bottom:2%;
    }
</style>