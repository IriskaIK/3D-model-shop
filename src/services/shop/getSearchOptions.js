import {createRequestOptions} from "@/utils/requestOptionsGenerator";
import {useProductsStore} from "@/stores/products";

export async function getAvailableTags(){

    const requestOptions = createRequestOptions({}, 'GET')

    const data = await fetch(
        "http://localhost:3000/api/products/tags",
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
            const store = useProductsStore()
            if(data.status === 200){
                store.setAvailableTags(data.json)

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

export async function getAvailableUniverses(){

    const requestOptions = createRequestOptions({}, 'GET')

    const data = await fetch(
        "http://localhost:3000/api/products/universes",
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
            const store = useProductsStore()
            if(data.status === 200){
                store.setAvailableUniverses(data.json)

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