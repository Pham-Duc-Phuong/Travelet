export type postComment = {
    id: number
    maPhong: number
    maNguoiBinhLuan: number
    ngayBinhLuan: string
    noiDung: string
    saoBinhLuan: number
}
export type getComment = {
    id: number,
    ngayBinhLuan: string,
    noiDung: string,
    saoBinhLuan: number,
    tenNguoiBinhLuan: string,
    avatar: string,
}