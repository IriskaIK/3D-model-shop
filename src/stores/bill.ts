import { ref, computed } from "vue";
import { defineStore } from "pinia";

// Define the interfaces for the store's state types
interface UserContacts {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  status: boolean;
}

interface DeliveryInfo {
  region: string;
  city: string;
  office: string;
  status: boolean;
}

interface Payment {
  paymentWay: string;
  status: boolean;
}

interface RecipientContacts {
  firstName: string;
  secondName: string;
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
      region: "",
      city: "",
      office: "",
      status: false,
    },
    payment: {
      paymentWay: "",
      status: false,
    },
    recipientContacts: {
      firstName: "",
      secondName: "",
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
    // Add actions here
  },
});
