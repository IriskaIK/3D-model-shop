import axios, { AxiosResponse } from 'axios'

import User from '@/types/user.types'
import apiClient from '@/services/apiClient'

export async function isAuthenticated(): Promise<User | null> {

  try {
    const response: AxiosResponse<User> = await apiClient.get(`/account`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}
