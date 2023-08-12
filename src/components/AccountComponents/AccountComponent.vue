<template>
    <v-card>
        <v-tabs v-model="tab" color="primary" dark align-tabs="center" slider-color="primary">
            <v-tab :value="1">Personal info</v-tab>
            <v-tab :value="2">My orders</v-tab>
            <v-tab :value="3">Wishlist</v-tab>

        </v-tabs>


        <v-window v-model="tab">
            <v-window-item :value="1">
                <v-container>
                    <v-row>
                        <v-col :cols="12" :md="8" style="margin: auto;">
                            <personalContainerComponent></personalContainerComponent>
                        </v-col>
                    </v-row>
                    
                </v-container>
                
            </v-window-item>
            <v-window-item :value="2">
                <v-container>
                    <v-row>
                        <v-col :cols="12" :md="8" style="margin: auto;">
                            <myOrdersComponent></myOrdersComponent>
                        </v-col>   
                    </v-row>
                    
                </v-container>
               
            </v-window-item>
            <v-window-item :value="3">
                <v-container>
                    <v-row>
                        <v-col :cols="12" :md="8" style="margin: auto;">
                            <wishlistComponent></wishlistComponent>
                        </v-col>
                    </v-row>
                </v-container>
                
            </v-window-item>
        </v-window>


    </v-card>
</template>
<script>
import wishlistComponent from './wishlistComponents/wishlistComponent.vue';
import personalContainerComponent from './personalInfoComponents/personalContainerComponent.vue';
import myOrdersComponent from './ordersComponents/myOrdersComponent.vue'
export default {
    components: {
        personalContainerComponent,
        wishlistComponent,
        myOrdersComponent

    },
    data() {
        return {
            tab: null
        }
    },

}
</script>
<style></style>