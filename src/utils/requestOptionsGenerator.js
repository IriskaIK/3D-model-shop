export function createRequestOptions(body = {}, method = 'POST') {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    const requestOptions = {
        method: method,
        headers: headers,
        withCredentials: true,
        credentials: "include",
        body: body,
        redirect: "follow",
        mode: "cors",
    };
    if(method === 'GET'){
        delete requestOptions.body
    }
    return requestOptions
}