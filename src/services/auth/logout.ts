import axios, { AxiosResponse } from 'axios'
import apiClient from '@/services/apiClient'


interface Response{
    msg : string,
    status : number,
}

export async function logout(): Promise<Response | null> {

    try {
        const response: AxiosResponse<Response> = await apiClient.post(`/auth/logout`);

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
