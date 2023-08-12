import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBillStore = defineStore("bill", {
  state: () => ({
    /** @type {{ fisrtName : string, lastname : string, phone : string, email : string, status: boolean }} */
    profileData: {},


  }),
  getters: {
    

  },
  actions: {
    


  },
});
