import axios, { AxiosResponse } from 'axios'
import User from '@/types/user.types'
import apiClient from '@/services/apiClient'
axios.defaults.withCredentials = true

interface LoginPayload {
  email: string;
  password: string;
}

interface ResponseData {
  status: number;
  msg: string;
}

export async function login(payload : LoginPayload) : Promise<ResponseData | null>{
  try {
    const response : AxiosResponse<ResponseData> = await apiClient.post('/auth/login', payload)
    console.log(response)
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