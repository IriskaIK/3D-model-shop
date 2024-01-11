import {createRequestOptions} from "@/utils/requestOptionsGenerator";
import {useCartStore} from "@/stores/cart";

export async function removeCartItem(productPublicId){
    const store = useCartStore()
    const body = JSON.stringify({product_pid : productPublicId})
    const requestOptions = createRequestOptions(body, 'DELETE')

    const data = await fetch(
        "http://localhost:3000/api/account/cart",
        requestOptions
    )
        .then(async (res) => {
            let json = ''
            if(res.status === 200){
                json = await res.json()
            }
            return {json, status : res.status}
        })
        .then(async (data)=>{

            if(data.status === 200){

                return true
            }else if(data.status === 401){
                // catch server issues
                return false
            }
            return false
        })
        .catch((err)=>{
            console.log(err)
            return false
        })

    return data
}