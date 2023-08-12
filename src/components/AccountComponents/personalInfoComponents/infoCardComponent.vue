<template>
    <v-card variant="plain" :title="this.title" :prepend-icon="this.icon">
        <v-container>
            <v-row>
                
                <slot :editing="this.isEditing"></slot>
                
            </v-row>
            
        </v-container>
        
        <v-card-actions>
            <v-btn :disabled="isValid" color="success" @click="saveData()">Save</v-btn>
            <v-btn :disabled="isEditing" color="success" @click="editData()">Edit</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props:{
        title: String,
        icon: String,
        validInput : Boolean
    },
    data() {
        return {
            content : {},
            isEditing : false,
        }
    },
    methods: {
        editData(){
            this.isEditing = true
        },
        saveData(){
            this.$emit('saveData')
            this.isEditing = false
        }
    },
    computed:{
        isValid(){
            if (this.validInput && this.isEditing){
                return false
            }
            return true
        }
    }
    
}
</script>
<style lang="">
    
</style>