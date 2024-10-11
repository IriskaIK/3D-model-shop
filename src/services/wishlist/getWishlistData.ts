import type Product from "@/types/product.types";
import axios, { AxiosResponse } from 'axios'
import apiClient from '@/services/apiClient'

interface CartProduct extends Product{
    product_id : number;
}

export async function fetchWishlistData() : Promise<CartProduct[] | null> {
    try {
        const response : AxiosResponse<CartProduct[]> = await apiClient.get("/account/wishlist");
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

