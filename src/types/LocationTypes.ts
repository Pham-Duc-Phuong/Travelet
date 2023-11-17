export type Location = {
    id: number
    tenViTri: string
    tinhThanh: string
    quocGia: string
    hinhAnh: string
}

export type LocationByPage = {
    pageIndex: number,
    pageSize: number,
    totalRow: number,
    keywords: null,
    data: Location[]
}
