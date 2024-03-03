import axios from "axios";

export  const BASE_URL = 'http://185.164.73.28:8000/api/v1/';

const Api = axios.create({
    
    baseURL:BASE_URL ,
    headers:{
        "Content-Type":"application/json" ,
        Accept:"application/json"
    }
})


Api.interceptors.request.use(
    function (config) {
        // Cooki user addd
    },
    function (error) {
        // toast.error()
    }
) ;


Api.interceptors.request.use(
    function (response) {
        if(response.data.status === 400) {
            // remove Cookie replace to login
        }
    }
)

export default Api ;