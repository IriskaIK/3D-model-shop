import {createRequestOptions} from "@/utils/requestOptionsGenerator";
import {useProductsStore} from "@/stores/products";

export async function getProductData(productID){
    const store = useProductsStore()
    const body = JSON.stringify({})
    const requestOptions = createRequestOptions(body,'POST')

    const data = await fetch(
        "http://localhost:3000/api/products/product/"+productID,
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
                store.setCurrentProduct(data.json)

                return {status : 'ok', data:data.json}
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