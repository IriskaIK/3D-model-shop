import { AxiosResponse } from 'axios'
import axios from 'axios'
import apiClient from '@/services/apiClient'

interface ResponseData {
  status: number;
  msg: string;
}


export default async function updateUserDetails(payload : { firstName: string, lastName: string, email: string, phoneNumber: string  }) : Promise<ResponseData | null> {
  try {
    const response : AxiosResponse<ResponseData> = await apiClient.put('/account/', payload)
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