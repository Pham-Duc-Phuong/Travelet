import axios, { AxiosRequestHeaders, CreateAxiosDefaults } from 'axios'
import { getID, getToken } from 'utils'

const tokenCybersoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgMzgiLCJIZXRIYW5TdHJpbmciOiIxNC8wNy8yMDI0IiwiSGV0SGFuVGltZSI6IjE3MjA5MTUyMDAwMDAiLCJuYmYiOjE3MDI0ODY4MDAsImV4cCI6MTcyMTA2MjgwMH0.cB5XSbdlq0lzL-wmbcuAyvlRLMYFWmr20ODRWN5rPZc"
export const apiInstance = (config?: CreateAxiosDefaults) => {
    const api = axios.create(config)
    api.interceptors.request.use((config) => {
        return {
            ...config,
            headers: {
                tokenCybersoft,
                token: getToken(),
                id: Number(getID())
            } as unknown as AxiosRequestHeaders
        }
    })
    return api
}