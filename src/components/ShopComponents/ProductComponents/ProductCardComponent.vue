<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card 
        class="card" 
        color="#313131" 
        :elevation="isHovering ? 12 : 2" 
        v-bind="props"
        :class="{'on-hover': isHovering }"
        >
            <v-img 
            :src="this.src"
            height="200px"
            cover
            ></v-img>

            <v-card-title>
                {{this.title}}
            </v-card-title>

            <v-card-subtitle>
                {{this.subtitle}}
            </v-card-subtitle>
            <v-card-text>
                <v-chip class="chip-item" v-for="item in tags" >{{item}}</v-chip>
            </v-card-text>
            <v-card-actions>
                <addToCartBtn :productId="this.productId"></addToCartBtn>
                <addToLikedBtn :productId="this.productId"></addToLikedBtn>
                <v-spacer></v-spacer>
                <seeMoreBtn :productId="this.productId"></seeMoreBtn>
            </v-card-actions>
        
        </v-card>
    </v-hover>
    
</template>
<script>
import addToCartBtn from './addToCartBtn.vue';
import addToLikedBtn from './addToLikedBtn.vue';
import seeMoreBtn from './seeMoreBtn.vue';
export default {
    components:{
        addToCartBtn,
        addToLikedBtn,
        seeMoreBtn
    },

    props:{
        src:String,
        title:String,
        subtitle: String,
        price: String,
        tags : Array,
        productId: String
    },
    data() {
        return {
 
        }
    },

}
</script>
<style scoped>
.card{
    transition: opacity 0.4s ease-in-out;
}


.card:not(.on-hover) {
    opacity: 0.8;
}
.chip-item{
    margin-right: 1%;
    margin-top: 1%;
}


</style>