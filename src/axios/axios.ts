import axios from 'axios'
import Swal from 'sweetalert2'
import router from '@/router'
import store from '@/store'
const baseURL = process.env.VUE_APP_API_BASE_URL
const createApi = () => {
    const api = axios.create({
        baseURL,
        timeout: 20000,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    api.interceptors.request.use(config => {
        const token = store.state.idToken
        if (token) {
            config.headers!.Authorization = `Bearer ${token}`
        }
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
