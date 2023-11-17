import { z } from 'zod'

export const RegisterSchema = z.object({
    id: z.coerce.number({required_error: "Vui lòng nhập id", invalid_type_error: "vui lòng nhập đúng id"}),
    name: z.string().nonempty('Vui lòng nhập name'),
    email: z.string().nonempty('Vui lòng nhập email'),
    password: z.string().nonempty('Vui lòng nhập password'),
    phone: z.string().nonempty('Vui lòng nhập phone'),
    birthday: z.string().nonempty('Vui lòng nhập birthday'),
    gender: z.coerce.boolean({required_error: "Vui lòng nhập gender"}),
    role: z.string().nonempty('Vui lòng nhập role'),
})
export type RegisterSchemaType = z.infer<typeof RegisterSchema>