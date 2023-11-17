import { createSlice } from "@reduxjs/toolkit"
import { user } from "types"
import { SigninThunk } from "."
import { getID, getToken } from "utils"
type AuthSliceInitialState = {
    userLogin?: user
    isLoginPending?: boolean
    token?: string
    id?: number
}

const initialState: AuthSliceInitialState = {
    id: Number(getID()),
    token: getToken(),
}

const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(SigninThunk.fulfilled, (state, { payload }) => {
                state.userLogin = payload.user
                state.token = payload.token
                state.isLoginPending = false
                localStorage.setItem("id", String(payload?.user?.id))
                localStorage.setItem("token", payload?.token)
            })
            .addCase(SigninThunk.pending, (state) => {
                state.isLoginPending = true
            })
            .addCase(SigninThunk.rejected, (state) => {
                state.isLoginPending = false
            })
    },
})
export const { actions: AuthActions, reducer: AuthReducer } = AuthSlice