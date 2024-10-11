import axios, { AxiosResponse } from 'axios'
import apiClient from '@/services/apiClient'

interface RegisterPayload {
    email: string;
    password: string;
    first_name : string;
}

interface ResponseData {
    status: number;
    msg: string;
}



export async function register(payload : RegisterPayload) : Promise<ResponseData | null>{
    try {
        const response : AxiosResponse<ResponseData> = await apiClient.post('/auth/register', payload)
        return { msg : response.data.msg, status : response.status }
    }catch(error){
        if(axios.isAxiosError(error)){
            console.error('Axios error:', error.response?.data);
            return { msg: error.response?.data.error, status: error.response!.status };
        }else{
            console.error('Unexpected error:', error);
        }
        return null;
    }
}
