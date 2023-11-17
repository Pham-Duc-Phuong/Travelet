import { apiInstance } from "constant/apiInstance";
import { Location, LocationByPage } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_LOCATION
})
export const LocationServices= {
    location:() => api.get<ApiResponse<Location[]>>(''),
    locationByPage:() => api.get<ApiResponse<LocationByPage>>('phan-trang-tim-kiem?pageIndex=1&pageSize=8'),
}