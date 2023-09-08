import { ref, computed } from "vue";
import { defineStore } from "pinia";



export const useAccountStore = defineStore("account", {
    state: () => ({
    /** @type {{ fisrt_name : string, last_name : string, phone : string, email : string, isAuth: boolean }} */
    profileData: {
    },
    /** @type {{ region : string, city : string, postOffice : string}} */
    deliveryData:{

    }
    }),
    getters: {
        getUserAuthStatus(state){
            if(state.profileData.isAuth){
                return true
            }
            return false
        },
        getFirstName(state){
            return state.profileData.fisrt_name
        },
        getEmail(state){
            return state.profileData.email
        },
        getProfileData(state){
            return {
                first_name : state.profileData.fisrt_name,
                last_name : state.profileData.last_name || '',
                phone : state.profileData.phone || '',
                email : state.profileData.email
            }
        },
        getDeliveryData(state){
            return {
                region : state.deliveryData.region || '',
                city : state.deliveryData.city || '',
                postOffice : state.deliveryData.postOffice || ''
            }
        }
    },
    actions: {
        setUserData(payload){
            this.profileData = {
                fisrt_name : payload.first_name || '',
                last_name : payload.last_name || '',
                phone : payload.phone || '',
                email : payload.email || '',
                isAuth : payload.isAuth

            }
        },
        setDeliveryData(payload){
            this.deliveryData = {
                region : payload.region,
                city : payload.city,
                postOffice : payload.postOffice
            }
        }
    },
});
