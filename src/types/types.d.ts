declare type ApiResponse<T> = {
    statusCode: number
    content: T
}
declare type ApiResponse_1<T> = ApiResponse<T> & {
    message: string
}