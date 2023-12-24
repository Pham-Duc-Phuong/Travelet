import { apiInstance } from "constant";
import { booked } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_BOOK
})
export const BookServices = {
    booking: (data: booked) => api.post<ApiResponse_1<booked>>("", data),
    listBooked: (query: number) => api.get<ApiResponse<booked[]>>(`/lay-theo-nguoi-dung/${query}`)
}