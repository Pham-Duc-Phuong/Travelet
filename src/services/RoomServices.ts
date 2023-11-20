import { apiInstance } from "constant/apiInstance"
import { Room } from "types"

const api = apiInstance({
    baseURL: import.meta.env.VITE_ROOM
})

export const RoomServices = {
    layPhongTheoViTri: (maViTri: number) => api.get<ApiResponse<Room[]>>(`/lay-phong-theo-vi-tri?maViTri=${maViTri}`)
}