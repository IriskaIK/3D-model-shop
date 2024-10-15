import type Image from '@/types/image.types'
import {City} from "@/services/delivery/getCitiesByRegionId";
import {Region} from "@/services/delivery/getRegions";
import {PostOffice} from "@/services/delivery/getPostOfficesByCityId";
export interface ShippingAddress {
  id: number | null,
  full_address: string | null,
  region_id: number | null,
  city_id: number | null,
  postOffice_id: number | null,
  city: City | null,
  region: Region | null,
  postOffice: PostOffice | null
}


export default interface User {
  id: number | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  phone: string | null;
  shipping_address: ShippingAddress;
  avatar: Image ;
}