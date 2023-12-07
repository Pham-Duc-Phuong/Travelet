import { apiInstance } from "constant"
import { getComment, postComment } from "types"

const api = apiInstance({
    baseURL: import.meta.env.VITE_COMMENT
})

export const CommentServices = {
    getComment: (data: string) => api.get<ApiResponse<getComment[]>>(`/lay-binh-luan-theo-phong/${data}`),
    postComment: (data: postComment) => api.post('', data)
}