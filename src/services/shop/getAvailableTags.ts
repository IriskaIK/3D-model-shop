import axios, { AxiosResponse } from 'axios'
import apiClient from '@/services/apiClient'
import { Tag } from '@/types/product.types'
export async function getAvailableTags() : Promise<Tag[] | null> {
  try {
    const response : AxiosResponse<Tag[]> = await apiClient.get("/products/tags/",);
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


