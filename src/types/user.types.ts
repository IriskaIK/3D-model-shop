import type Image from '@/types/image.types'

export interface ShippingAddress {
  id: number | null,
  full_address: string | null,
  region_id: number | null,
  city_id: number | null,
  postOffice_id: number | null,
  city: string | null,
  region: string | null,
  postOffice: string | null
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