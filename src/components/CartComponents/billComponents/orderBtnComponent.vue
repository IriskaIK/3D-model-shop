<template lang="">
    <v-btn width='100%' color="teal" :disabled='isDisabled' @click='saveData()'>
        Order
    </v-btn>
</template>
<script>
export default {
    props:{
        store : Object
    },
    methods:{
        saveData(){
            console.log('save data')
        }
        
    },
    computed:{
        isDisabled(){
            return !this.store.getBillStatus
        }
    }
}
</script>
<style lang="">
    
</style>