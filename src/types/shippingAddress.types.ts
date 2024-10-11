interface City{
  id : number;
  name : string;
  region_id : number;
}

interface Region {
  id : number;
  name : string;
}

interface PostOffice{
  id : number;
  address : string;
  city_id : number;
}

//
// export default interface ShippingAddress {
//   id: number;
//   full_address: string;
//   region_id : number;
//   city_id : number;
//   postOffice_id : number;
//   city : City;
//   region : Region;
//   postOffice : PostOffice;
// }