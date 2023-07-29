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
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Forbiden stars",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['apple', 'banana', 'orange'],
                    id:'023fss'
                },
                {
                    title:"Something",
                    subtitle:"Undaunted",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['cat', 'dog', 'elephant', 'giraffe'],
                    id:'023fss'
                    
                },
                {
                    title:"Something",
                    subtitle:"Company of Heroes",
                    price:"20",
                    src:'https://cf.geekdo-images.com/aGMHRdqHzjOzekmIrLsaZQ__opengraph/img/kfVvVhr3agOVmtD79dC7jBwa4fA=/fit-in/1200x630/filters:strip_icc()/pic2454326.jpg',
                    tags:['red', 'blue', 'green', 'yellow'],
                    id:'023fss'
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