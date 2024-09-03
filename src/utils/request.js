import axios from 'axios'
import { useToast } from 'vue-toast-notification'

let api = import.meta.env.VITE_APP_BASE_API

const service = axios.create({
    baseURL: `${import.meta.env.VITE_APP_BASE_API}/api/${import.meta.env.VITE_APP_BASE_API_VERSION}`,
    timeout: 60000,
})

const toast = useToast({
    position: 'top',
})

service.interceptors.response.use(
    res => {
        if (res.data.code != 1000) {
            toast.error(res.data.message)
        }
        return res
    },
    error => {
        toast.error('Request error')
        return Promise.reject(error)
    },
)
export default service
