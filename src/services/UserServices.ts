import { apiInstance } from "constant/apiInstance"
import { user } from "types"

const api = apiInstance({
    baseURL: import.meta.env.VITE_USER
})

export const UserServices = {
    getUserByID: (query: string) => api.get<ApiResponse<user>>(`/${query}`)
}