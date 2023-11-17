
export type user = {
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    birthday: string,
    avatar: string,
    gender: boolean,
    role: string
}
export type Signin = {
    user: user
    token: string
}