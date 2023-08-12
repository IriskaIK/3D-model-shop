<template lang="">
    <v-btn color="" :disabled='this.status' @click='saveData()'>
        

        <v-icon v-if='isSaved' icon="mdi-check-circle"></v-icon>

        <div v-else>Confirm</div>

    </v-btn>
</template>
<script>
export default {
    data() {
        return {
            isSaved:false
        }
    },
    props:{
        data : Object,
        storage : Object,
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
            this.storage.$patch({
                [this.from] : data
            })
            this.isSaved = true
        }
    },
    watch:{
        data : {
            handler(newValue, oldValue){
                this.isSaved = false
                this.storage.$patch({
                    [this.from]: {status:false}
                }
                    )
            },
            deep: true
        }
    }
    
}
</script>
<style lang="">
    
</style>