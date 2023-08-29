<template>
    <v-container>
        <v-row justify="center">
            <v-col md="4">
                <RegisterCardComponent></RegisterCardComponent>
            </v-col>
        </v-row>
    </v-container>

</template>
<script>
import RegisterCardComponent from '../components/RegisterComponent/RegisterCardComponent.vue'

export default {
    components:{
        RegisterCardComponent
    }
    
}
</script>
<style>
    
</style>