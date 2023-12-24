import { apiInstance } from "constant/apiInstance"
import { Room } from "types"

const api = apiInstance({
    baseURL: import.meta.env.VITE_ROOM
})

export const RoomServices = {
    layPhong: () => api.get<ApiResponse<Room[]>>(''),
    layPhongTheoViTri: (maViTri: string) => api.get<ApiResponse<Room[]>>(`/lay-phong-theo-vi-tri?maViTri=${maViTri}`),
    layPhongTheoID: (id: string) => api.get<ApiResponse<Room>>(`/${id}`),
}