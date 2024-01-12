import {createRequestOptions} from "@/utils/requestOptionsGenerator";

import {useWishlistStore} from "@/stores/wishlist";

export async function getWishlistItems(){
    const store = useWishlistStore()
    const body = JSON.stringify({})
    const requestOptions = createRequestOptions(body, 'GET')

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

                let storeData = []
                for(let index=0; index < data.json.length; index++){
                    let src
                    try{
                        src = data.json[index].images[0].path
                    }catch (e) {
                        src = []
                    }
                    storeData.push({
                        name : data.json[index].title,
                        price : data.json[index].price,
                        id : data.json[index].publicId,
                        currency : data.json[index].currency,
                        src: src,
                    })
                }
                store.setProducts(storeData)

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