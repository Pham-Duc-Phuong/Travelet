import { apiInstance } from "constant";
import { booked } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_BOOK
})
export const BookServices = {
    listBooked: () => api.get<ApiResponse<booked[]>>(""),
    booking: (data: booked) => api.post<ApiResponse_1<booked>>("",data)
}