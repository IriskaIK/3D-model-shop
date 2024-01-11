import {createRequestOptions} from "@/utils/requestOptionsGenerator";

export async function getQuantityData(productPublicId){
    const body = JSON.stringify({})
    const requestOptions = createRequestOptions(body, 'GET')
    console.log(productPublicId)
    const data = await fetch(
        "http://localhost:3000/api/account/cart/"+productPublicId,
        requestOptions
    )
        .then(async (res) => {
            let json = ''
            if(res.status === 200){
                json = await res.json()
            }
            return {json, status : res.status}
        })
        .then((data)=>{

            if(data.status === 200){


                return data.json[0].quantity
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