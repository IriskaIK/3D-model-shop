import { ref, computed } from "vue";
import { defineStore } from "pinia";
import placeOrder from "@/services/orders/placeOrder";
import {City} from "@/services/delivery/getCitiesByRegionId";
import {Region} from "@/services/delivery/getRegions";
import {PostOffice} from "@/services/delivery/getPostOfficesByCityId";

// Define the interfaces for the store's state types
interface UserContacts {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  status: boolean;
}

interface DeliveryInfo {
  region: Partial<Region> | null;
  city: Partial<City> | null;
  postOffice: Partial<PostOffice> | null;
  status: boolean;
}

interface Payment {
  paymentWay: string;
  status: boolean;
}

interface RecipientContacts {
  firstName: string;
  lastName: string;
  phone: string;
  status: boolean;
}

export const useBillStore = defineStore("bill", {
  state: (): {
    userContacts: UserContacts;
    deliveryInfo: DeliveryInfo;
    payment: Payment;
    recipientContacts: RecipientContacts;
  } => ({
    userContacts: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      status: false,
    },
    deliveryInfo: {
      region: null,
      city: null,
      postOffice: null,
      status: false,
    },
    payment: {
      paymentWay: "",
      status: false,
    },
    recipientContacts: {
      firstName: "",
      lastName: "",
      phone: "",
      status: false,
    },
  }),

  getters: {
    getBillStatus(state): boolean {
      return (
        state.userContacts.status &&
        state.deliveryInfo.status &&
        state.payment.status &&
        state.recipientContacts.status
      );
    },
  },

  actions: {
    async orderFromCart() {

      if(!(this.deliveryInfo.city?.id && this.deliveryInfo.region?.id && this.deliveryInfo.postOffice?.id)){
        return;
      }
      try {
        await placeOrder({
          shipping_address : {
            city_id : this.deliveryInfo.city?.id,
            region_id : this.deliveryInfo.region.id,
            postOffice_id : this.deliveryInfo.postOffice.id

          },
          recipient : {
            first_name : this.recipientContacts.firstName,
            last_name : this.recipientContacts.lastName,
            phone : this.recipientContacts.phone,
          }
        })
      }catch (e) {
        console.error(e);
      }
    }
  },
});
