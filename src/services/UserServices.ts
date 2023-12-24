import { apiInstance } from "constant"
import { AccountSchemaType } from "schema"
import { user } from "types"

const api = apiInstance({
    baseURL: import.meta.env.VITE_USER
})

export const UserServices = {
    getUser:() => api.get<ApiResponse<user[]>>(''),
    getUserByID: (query: string) => api.get<ApiResponse<user>>(`/${query}`),
    updateUser: (data: AccountSchemaType ,query: number) => api.put(`/${query}`, data)
}