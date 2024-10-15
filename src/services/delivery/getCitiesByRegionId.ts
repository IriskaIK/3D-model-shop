import {AxiosResponse} from "axios";
import apiClient from "@/services/apiClient";
import axios from "axios";



export interface City{
    region_id : number,
    id : number,
    name : string,
}

export const getCitiesByRegionId = async (regionId: number) : Promise<City[] | null> => {
    try {
        const response: AxiosResponse<City[]> = await apiClient.get(`/delivery/cities/${regionId}`);
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