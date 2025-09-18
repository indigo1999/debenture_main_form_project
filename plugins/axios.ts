import axios from 'axios' 

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const HOST = "127.0.0.1"//config.private.API_HOST
    const PORT = 3142//config.private.API_PORT
    const defaultUrl = `${HOST}:${PORT}`

    const axios_api = axios.create({
        baseURL : defaultUrl ,
        headers : {
            common : {
                'Content-Type' : 'application/json'
            },
            
        },
    });

    return {
        provide : {
           axios_api
        }
    }

    // return {
    //     provide : {
    //         axios_api : axios_api
    //     },
    // };
});