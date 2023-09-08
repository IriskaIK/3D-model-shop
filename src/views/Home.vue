<template>



    <TopicComponent v-for="value in topics" :topicName="value.name" :topicContent="value.content"></TopicComponent>

    <v-footer >
        <div class="px-4 py-2 text-center w-100">
            {{ new Date().getFullYear() }} — <strong>TestApp</strong>
        </div>
    </v-footer>

    
</template>
<script>
import TopicComponent from '../components/HomeComponents/TopicComponent.vue';
export default {
    components: { TopicComponent },
    data() {
        return {
            topics : [
                
                {name:'Something', 
                content:[
                    {
                    name: 'Forbiden stars',
                    src : 'https://wallpapers.com/images/featured/warhammer-e1dpbba47ubbh6o0.jpg',
                    linkTo : '/'
                    },
                    {
                    name:'Undaunted',
                    src:'https://cf.geekdo-images.com/TVCI92YdCPSLy2az5M-ctQ__opengraph/img/wR_xg32ZlPBqojuA2RTq2-dU38E=/0x2284:3473x4107/fit-in/1200x630/filters:strip_icc()/pic6189072.jpg',
                    linkTo : '/'
                    },
                    {
                    name:'Witcher: Old world',
                    src: 'https://cf.geekdo-images.com/tQVVSXcmYLvAoI28cp-2Tg__opengraph/img/MHb4OQswtVsQl3grgzeszPupJVM=/0x1683:3543x3543/fit-in/1200x630/filters:strip_icc()/pic5974859.jpg',
                    linkTo : '/'
                    }
                ]
                },
                {name:'Some', 
                content:[
                    {
                    name: 'Forbiden stars',
                    src : 'https://wallpapers.com/images/featured/warhammer-e1dpbba47ubbh6o0.jpg',
                    linkTo : '/'
                    },
                    {
                    name:'Undaunted',
                    src:'https://cf.geekdo-images.com/TVCI92YdCPSLy2az5M-ctQ__opengraph/img/wR_xg32ZlPBqojuA2RTq2-dU38E=/0x2284:3473x4107/fit-in/1200x630/filters:strip_icc()/pic6189072.jpg',
                    linkTo : '/'
                    },
                    {
                    name:'Witcher: Old world',
                    src: 'https://cf.geekdo-images.com/tQVVSXcmYLvAoI28cp-2Tg__opengraph/img/MHb4OQswtVsQl3grgzeszPupJVM=/0x1683:3543x3543/fit-in/1200x630/filters:strip_icc()/pic5974859.jpg',
                    linkTo : '/'
                    }
                ]
                },
                {name:'Cringe', 
                content:[
                    {
                    name: 'Forbiden stars',
                    src : 'https://wallpapers.com/images/featured/warhammer-e1dpbba47ubbh6o0.jpg',
                    linkTo : '/'
                    },
                    {
                    name:'Undaunted',
                    src:'https://cf.geekdo-images.com/TVCI92YdCPSLy2az5M-ctQ__opengraph/img/wR_xg32ZlPBqojuA2RTq2-dU38E=/0x2284:3473x4107/fit-in/1200x630/filters:strip_icc()/pic6189072.jpg',
                    linkTo : '/'
                    },
                    {
                    name:'Witcher: Old world',
                    src: 'https://cf.geekdo-images.com/tQVVSXcmYLvAoI28cp-2Tg__opengraph/img/MHb4OQswtVsQl3grgzeszPupJVM=/0x1683:3543x3543/fit-in/1200x630/filters:strip_icc()/pic5974859.jpg',
                    linkTo : '/'
                    }
                ]
                }
                
            ]
        }
    },
}
</script>
<style scoped>



</style>