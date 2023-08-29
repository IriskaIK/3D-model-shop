import { ref, computed } from "vue";
import { defineStore } from "pinia";

function createPostRequestOptions(body = {}) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    const requestOptions = {
        method: "POST",
        headers: headers,
        withCredentials: true,
        credentials: "include",
        body: body,
        redirect: "follow",
        mode: "cors",
    };
    return requestOptions
}

export const useAccountStore = defineStore("account", {
    state: () => ({
    /** @type {{ fisrt_name : string, last_name : string, phone : string, email : string, status: boolean }} */
    profileData: {},
    }),
    getters: {},
    actions: {
        async regUser(payload) {
    
            const body = JSON.stringify({
                email: payload.email,
                first_name: payload.first_name,
                password: payload.password,
            });

            const requestOptions = createPostRequestOptions(body)

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
                    console.log(data.json.user)
                    this.profileData = data.json.user
                }
                return { status: data.status, msg: data.json.msg}
            })

            return data
            

            
           
        },
        async loginUser(payload){
            const body = JSON.stringify({
                email: payload.email,
                password: payload.password,
            });

            const requestOptions = createPostRequestOptions(body)


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
                    console.log(data.json.user)
                    this.profileData = data.json.user
                }
                return { status: data.status, msg: data.json.msg}

            })

            return data
        }
    },
});
