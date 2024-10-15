import {AxiosResponse} from "axios";
import apiClient from "@/services/apiClient";
import axios from "axios";


interface OrderStatus{
    id : number;
    status : string;
}
interface OrderItem{
    order_item_id : number,
    title : string,
    subtitle : string,
    price : number,
    prod_id: number,
    quantity : number,
}

export interface Order {
    orderItems : OrderItem[];
    recipient_address: RecipientAddress;
    recipient : Recipient;
    orderStatus : OrderStatus;

    created_at : string;
    updated_at : string;
    total_price : number;
    delivery_price : number;

}

interface RecipientAddress{
    id : number;
    address : string;
    city : {
        name : string;
    };
    region : {
        name : string;
    };
    postOffice : {
        name : string;
    }
}

interface Recipient{
    id : number;
    first_name : string;
    last_name : string;
    phone : string;
}

export default async function getOrders(): Promise<Order[] | null>{
    try {
        const response : AxiosResponse<Order[]> = await apiClient.get("account/orders");
        console.log(response.data)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data);
            return null;
        } else {
            console.error('Unexpected error:', error);
        }
        return null;
    }
}