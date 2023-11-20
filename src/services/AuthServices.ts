import { apiInstance } from "constant"
import { LoginSchemaType, RegisterSchemaType } from "schema"
import { Signin } from "types"


const api = apiInstance({
    baseURL: import.meta.env.VITE_AUTH
})
export const AuthService = {
    register: (data: RegisterSchemaType) => api.post('/signup', data),
    login: (data: LoginSchemaType) => api.post<ApiResponse<Signin>>('/signin', data)
}