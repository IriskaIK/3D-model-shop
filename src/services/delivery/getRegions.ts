import {AxiosResponse} from "axios";
import apiClient from "@/services/apiClient";
import axios from "axios";

export interface Region{
    id: number;
    name: string;
}

export const getRegions = async (): Promise<Region[] | null> => {
    try {
        const response: AxiosResponse<Region[]> = await apiClient.get(`/delivery/regions`);
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