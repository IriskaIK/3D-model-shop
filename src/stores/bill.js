import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBillStore = defineStore("bill", {
  state: () => ({
    /** @type {{ fisrtName : string, lastname : string, phone : string, email : string }} */
    userContacts: {},

    /** @type {{ region : string, city : string, office : string}} */
    deliveryInfo : {},

    /** @type {{paymentWay : string}} */
    payment : {},

    /** @type {{ fisrtName : string, secondName : string, phone : string}} */
    recipientContacts : {},


  }),
  getters: {


  },
  actions: {


  },
});
