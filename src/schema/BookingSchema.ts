import { z } from "zod"

export const BookingSchema = z.object({
    ngayDen: z.string().nonempty("Vui lòng chọn ngày nhận phòng"),
    ngayDi: z.string().nonempty("Vui lòng chọn ngày rời phòng"),
    soLuongKhach: z.coerce.number({ required_error: "vui lòng nhập số lượng khách" }),
})
export type BookingSchemaType = z.infer<typeof BookingSchema>