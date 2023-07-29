<template lang="">
    <v-hover v-slot="{ isHovering, props }">
        <v-btn variant="outlined" ripple icon="mdi-heart" size="35" class="add-btn"
        :class="{'add-btn-hover': isHovering }" 
        v-bind="props"
        @click="this.addToLikedSnackBar = true">
        
        </v-btn>
    </v-hover>

    
    <v-snackbar
        v-model="addToLikedSnackBar"
        :timeout="2000"
        >
        Added to liked

        <template v-slot:actions>
            <v-btn
            color="pink"
            variant="text"
            @click="this.addToLikedSnackBar = false"
            >
            Close
            </v-btn>
        </template>
    </v-snackbar>
</template>
<script>
export default {
    props:{
        productId: String
    },
    data() {
        return {
            addToLikedSnackBar: false
        }
    },
    
}
</script>
<style scoped>
.add-btn-hover{
    color: green;
}
.add-btn{
    transition: color .1s ease-in;
}
</style>