import { type SearchOptions } from '@/stores/products'
import axios, { AxiosResponse } from 'axios'
import apiClient from '@/services/apiClient'
import Product from '@/types/product.types'

interface Response{
  offset : number,
  products : Product[]
}

export async function getShopProducts(options : SearchOptions) : Promise<Response | null>{
  try {
    const response : AxiosResponse<Response> = await apiClient.post("http://localhost:3000/api/products/", options);
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


