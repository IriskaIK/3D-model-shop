import type Product from "@/types/product.types";
import axios, { AxiosResponse } from 'axios'
import apiClient from '@/services/apiClient'

interface CartProduct extends Product{
    quantity : number;
    cart_product_id : number;
}

export async function fetchCartData() : Promise<CartProduct[] | null> {
    try {
        const response : AxiosResponse<CartProduct[]> = await apiClient.get("account/cart");
        console.log(response)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data);
        } else {
            console.error('Unexpected error:', error);
        }
        return null;
    }
}

