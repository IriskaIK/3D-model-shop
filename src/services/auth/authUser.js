import { createRequestOptions } from "../../utils/requestOptionsGenerator";
import { useAccountStore } from "../../stores/account"; 



export async function loginUser(payload){
    const body = JSON.stringify({
        email: payload.email,
        password: payload.password,
    });

    const requestOptions = createRequestOptions(body, 'POST')


    const data = await fetch(
        "http://localhost:3000/api/auth/login",
        requestOptions
    )
    .then(async (res) => {
        const json = await res.json()
        return {json, status : res.status}
        
    })
    .then((data)=>{
        if(data.status === 200){
            console.log(data.json)
        }
        return { status: data.status, msg: data.json.msg}

    })

    return data
}

export async function regUser(payload) {
    
    const body = JSON.stringify({
        email: payload.email,
        first_name: payload.first_name,
        password: payload.password,
    });

    const requestOptions = createRequestOptions(body, 'POST')

    const data = await fetch(
        "http://localhost:3000/api/auth/register",
        requestOptions
    )
    .then(async (res) => {
        const json = await res.json()
        return {json, status : res.status}
    })
    .then((data)=>{
        if(data.status === 201){
            console.log(data.json)
        }
        return { status: data.status, msg: data.json.msg}
    })

    return data
   
}


export async function isAuthenticated(){


    const requestOptions = createRequestOptions({}, 'GET')

    const data = await fetch(
        "http://localhost:3000/api/account/",
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
        const store = useAccountStore()
        if(data.status === 200){
            data.json['isAuth'] = true
            store.setUserData(data.json)

            return true
        }else if(data.status === 401){
            store.setUserData({
                isAuth : false
            })
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