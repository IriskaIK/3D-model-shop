import {AxiosResponse} from "axios";
import apiClient from "@/services/apiClient";
import axios from "axios";
export interface PostOffice {
    id: number;
    address: string;
    city_id: number;
}

export const getPostOfficesByCityId = async (cityId: number) : Promise<PostOffice[] | null> => {
    try {
        const response: AxiosResponse<PostOffice[]> = await apiClient.get(`/delivery/postOffices/${cityId}`);
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