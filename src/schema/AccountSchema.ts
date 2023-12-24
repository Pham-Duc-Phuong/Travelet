import { z } from "zod";

export const AccountSchema = z.object({
    name: z.string().nonempty('Vui lòng nhập name'),
    email: z.string().nonempty('Vui lòng nhập email'),
    phone: z.string().nonempty('Vui lòng nhập phone'),
    birthday: z.string().nonempty('Vui lòng nhập birthday'),
})
export type AccountSchemaType = z.infer<typeof AccountSchema>