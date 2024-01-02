import {createRequestOptions} from "../../utils/requestOptionsGenerator";
import {useProductsStore} from "../../stores/products";

export async function getShopProducts(){
    const store = useProductsStore()
    const body = JSON.stringify(store.getOptionsData)
    const requestOptions = createRequestOptions(body, 'POST')

    const data = await fetch(
        "http://localhost:3000/api/products",
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
                store.setShopData(data.json)

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