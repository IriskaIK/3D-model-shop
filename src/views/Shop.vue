<template>
    <SortBarComponent></SortBarComponent>
    
    <v-divider :thickness="3" class="border-opacity-25 divider"></v-divider>

    <ProductListComponent :content="this.products"></ProductListComponent>
                    



    


    
    
    
</template>
<script>

import ProductListComponent from '../components/ShopComponents/ProductListComponent.vue';
import SortBarComponent from '../components/ShopComponents/SortBarComponent.vue'
export default {
    components:{
        ProductListComponent,
        SortBarComponent
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
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'024fss'
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20.99",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'025fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"10.99",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
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
                    price:"20",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'028fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"20",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'029fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"20",
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
                    price:"20",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'223fss'
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'323fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"20",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'423fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"20",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'523fss'
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'623fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"20",
                    currency : 'USD',
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'723fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"20",
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
<style scoped>
.divider{
    margin: 2% 0;
}
</style>