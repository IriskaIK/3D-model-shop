import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBillStore = defineStore("bill", {
  state: () => ({
    /** @type {{ fisrtName : string, lastname : string, phone : string, email : string, status: boolean }} */
    userContacts: {},

    /** @type {{ region : string, city : string, office : string, status: boolean}} */
    deliveryInfo : {},

    /** @type {{paymentWay : string, status: boolean}} */
    payment : {},

    /** @type {{ fisrtName : string, secondName : string, phone : string, status: boolean}} */
    recipientContacts : {},


  }),
  getters: {
    getBillStatus(state){
      if(!state.userContacts.status || !state.deliveryInfo.status || !state.payment.status || !state.recipientContacts.status){
        return false
      }
      return true
    }

  },
  actions: {
    


  },
});
