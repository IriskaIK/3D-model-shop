import axios, { AxiosResponse } from 'axios'
import apiClient from '@/services/apiClient'
import { Category } from '@/types/product.types'
export async function getAvailableCategories() : Promise<Category[] | null>{
  try {
    const response: AxiosResponse<Category[]> = await apiClient.get("/products/categories");
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