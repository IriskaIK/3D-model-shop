import type Product from "@/types/product.types";
import axios, { AxiosResponse } from 'axios'
import apiClient from '@/services/apiClient'


interface ResponseData {
    status: number;
    msg: string;
}

export async function updateSelection(productId : number, selected : boolean) : Promise<ResponseData | null> {
    try {
        const response : AxiosResponse<ResponseData> = await apiClient.put("account/cart/selection/", {id : productId, selected : selected});
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




