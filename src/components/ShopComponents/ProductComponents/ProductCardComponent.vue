<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card 
        class="card" 
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
                <v-spacer></v-spacer>
                <div class="product-price">
                    {{this.price}} {{this.currency}}
                </div>
                
                
                
            </v-card-title>

            <v-card-subtitle>
                {{this.subtitle}}
            </v-card-subtitle>
            <v-card-text style="min-height: 100px;">
                <v-chip class="chip-item" v-for="item in tags" >{{item}}</v-chip>
            </v-card-text>
            <v-card-actions>
                <addToCartBtn :src="this.src" :productId="this.productId" :name="this.title" :price="this.price" :currency="this.currency"></addToCartBtn>
                <addToWishlistBtn :src="this.src" :name="this.title" :price="this.price" :currency="this.currency" :productId="this.productId"></addToWishlistBtn>
                <v-spacer></v-spacer>
                <seeMoreBtn  :productId="this.productId"></seeMoreBtn>
            </v-card-actions>
        
        </v-card>
    </v-hover>
    
</template>
<script>
import addToCartBtn from './addToCartBtn.vue';
import addToWishlistBtn from './addToWishlistBtn.vue';
import seeMoreBtn from './seeMoreBtn.vue';
export default {

    
    components:{
        addToCartBtn,
        addToWishlistBtn,
        seeMoreBtn
    },

    props:{
        src:String,
        title:String,
        subtitle: String,
        price: String,
        tags : Array,
        productId: String,
        currency : String,
    },
    data() {
        return {
 
        }
    }

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
.product-price{
    font-size: 18px;
}

</style>