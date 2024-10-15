import {AxiosResponse} from "axios";
import apiClient from "@/services/apiClient";
import axios from "axios";


interface Payload {
    recipient :{
        first_name : string,
        last_name : string,
        phone : string,
    },
    shipping_address : {
        region_id : number,
        city_id : number,
        postOffice_id : number,
    }
}

interface ResponseData {
    status: number;
    msg: string;
}


export default async function placeOrder(payload: Payload) : Promise<ResponseData | null> {
    try {
        const response : AxiosResponse<ResponseData> = await apiClient.post("account/orders", payload);
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