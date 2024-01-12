import {createRequestOptions} from "@/utils/requestOptionsGenerator";

export async function addWishListItem(productPublicId){
    const body = JSON.stringify({product_pid : productPublicId})
    const requestOptions = createRequestOptions(body, 'POST')

    const data = await fetch(
        "http://localhost:3000/api/account/wishlist",
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