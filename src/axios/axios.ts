import axios from 'axios'
import Swal from 'sweetalert2'
import router from '@/router'

const createApi = () => {
    const api = axios.create({
        timeout: 20000,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    api.interceptors.request.use(config => {
        const token = sessionStorage.getItem('token')!
        config.headers!.Authorization = token
        return config
    })
    // 添加响应拦截器
    api.interceptors.response.use(
        function (response) {
            return response
        },
        function (error) {
            return Promise.reject(error)
        },
    )

    return api
}

const api = createApi()

export default api
