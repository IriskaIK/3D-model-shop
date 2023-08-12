<template>


    <div >
        <GMapMap
        
        :center="center"
        :zoom="7"
        map-type-id="terrain"
        style="width: 300px; height: 150px; border-radius: 5px;"
        >
            <GMapCluster imagePath="https://image.pngaaa.com/871/5295871-middle" imageExtension="png">
                <GMapMarker
                    
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    @click="center=m.position"
                />
            </GMapCluster>
        </GMapMap>
    </div>



   
   
    
</template>
<script>
export default {
    data() {
        return {
            center: {lat: 50.093048, lng: 25.842120},
            markers: [
                {
                    position: {
                        lat: 50.093048, lng: 25.842120
                    },
                },
                {
                    position: {
                        lat: 50.093048, lng: 24.842120
                    },
                },
                {
                    position: {
                        lat: 50.093048, lng: 26.842120
                    },
                },
                {
                    position: {
                        lat: 50.093048, lng: 27.842120
                    },
                }
                
            ]
        }
    },
}
</script>
<style lang="">
    
</style>