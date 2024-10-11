import type Product from "@/types/product.types";
import axios, { AxiosResponse } from 'axios'
import apiClient from '@/services/apiClient'

// interface ResponseData {
//   status: number;
//   msg: string;
// }

interface ResponseData {
  status: number;
  msg: string;
}

export async function updateQuantity(productId : number, quantity : number) : Promise<ResponseData | null> {
  try {
    const response : AxiosResponse<ResponseData> = await apiClient.put("account/cart/", {id : productId, quantity : quantity});
    console.log(response)
    return { msg : response.data.msg, status : response.status }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data);
      return { msg: error.response?.data.error, status: error.response!.status };
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}




