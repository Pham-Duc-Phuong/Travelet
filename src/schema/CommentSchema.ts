import { z } from "zod";

export const CommentSchema = z.object({
    noiDung: z.string().nonempty('Vui lòng nhập nội dung'),
})
export type CommentSchemaType = z.infer<typeof CommentSchema>