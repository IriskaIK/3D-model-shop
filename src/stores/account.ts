import { defineStore } from 'pinia'
import type User from '@/types/user.types'
import { ShippingAddress } from '@/types/user.types'
import updateUserDetails from '@/services/account/updateUserDetails'

interface AccountState {
  profileData: User | null;
  isAuthenticated: boolean;
}

interface ProfileData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  isAuth: boolean;
}

export const useAccountStore = defineStore('account', {
  state: (): AccountState => ({
    profileData: null,
    isAuthenticated: false
  }),

  getters: {
    getUserAuthStatus(state): boolean {
      return state.isAuthenticated
    },
    getFirstName(state): string {
      if (state.profileData?.first_name) return state.profileData?.first_name
      return ''
    },
    getEmail(state): string {
      if (state.profileData?.email) return state.profileData?.email
      return ''
    },
    getProfileData(state): ProfileData | null {
      if (state.profileData === null) return null
      return {
        first_name: state.profileData.first_name || '',
        last_name: state.profileData.last_name || '',
        phone: state.profileData.phone || '',
        email: state.profileData.email || '',
        isAuth: state.isAuthenticated
      }
    },
    getDeliveryData(state): Partial<ShippingAddress> | null {
      if (state.profileData === null) return null
      return {
        region: state.profileData.shipping_address.region || null,
        city: state.profileData.shipping_address.city || '',
        postOffice: state.profileData.shipping_address.postOffice || ''
      }
    }
  },

  actions: {
    setUserData(payload: User) {
      this.profileData = payload
    },

    async updateUserData(payload: { first_name: string, last_name: string, email: string, phone: string }) {
      if (this.profileData) {
        this.profileData.first_name = payload.first_name
        this.profileData.phone = payload.phone
        this.profileData.email = payload.email
        this.profileData.last_name = payload.phone
      }
      await updateUserDetails({
        firstName: payload.first_name,
        lastName: payload.last_name,
        email: payload.email,
        phoneNumber: payload.phone
      })


    }
  }
})
