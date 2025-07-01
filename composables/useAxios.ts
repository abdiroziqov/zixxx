import axios from 'axios'
import { useRuntimeConfig } from '#app'

export default function useAxios() {
    const config = useRuntimeConfig()
    return axios.create({
        baseURL: config.public.apiBase || 'http://84.46.252.82/api/v1/',
    })
}