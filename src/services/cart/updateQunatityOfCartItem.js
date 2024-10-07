import {createRequestOptions} from "@/utils/requestOptionsGenerator";

export async function updateQunatityOfCartItem(productPublicId, quantity){
    const body = JSON.stringify({id : productPublicId, quantity : quantity})
    const requestOptions = createRequestOptions(body, 'PUT')

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