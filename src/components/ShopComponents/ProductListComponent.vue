<template >
    <v-card>
        <v-container >
            <v-row>
                <v-col cols="12" lg="3" md="6" sm="6" v-for="product in this.products" :id="product.id">
                    <ProductCardComponent :currency="product.currency" :productId="product.id" :tags="product.tags" :title="product.title" :subtitle="product.subtitle" :price="product.price" :src='product.src'></ProductCardComponent>
                </v-col>
            </v-row>


        </v-container >
    </v-card>
</template>
<script>
import ProductCardComponent from './ProductComponents/ProductCardComponent.vue';
export default {
    components:{
        ProductCardComponent
    },
    data() {
        return {
            products:[
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"19.99",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"13.49",
                    currency : 'USD',
                    src:'https://cdn.vox-cdn.com/thumbor/X1eBU-vUggrzhkBJF5YaN48nppo=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/5933177/rebellion_naboo_white_point_watermark.0.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'024fss'
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20.99",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/iCd6hMGDzsQ_UXh00iKsJA__opengraph/img/WZYCio8Ht3LjQ5-rEX1_nM6nIWM=/0x668:1000x1193/fit-in/1200x630/filters:strip_icc()/pic4602347.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'025fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"10.99",
                    currency : 'USD',
                    src:'https://pbs.twimg.com/media/FWcEdP0XoAUFzdT.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'026fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"4.99",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'027fss'
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20.00",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'028fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"20.00",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'029fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"20.00",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'030fss'
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'031fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"20",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'123fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"20.00",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'223fss'
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20.00",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'323fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"20.00",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'423fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"20.00",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'523fss'
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20.00",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'623fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"20.00",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'723fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"20.00",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'823fss'
                    
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'923fss'
                },
            ]
        }
    },
}
</script>
<style lang="">
    
</style>