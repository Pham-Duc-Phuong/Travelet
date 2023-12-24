import { createSlice } from "@reduxjs/toolkit"
import { getUserByIDThunk, getUserThunk } from "."
import { user } from "types"

type userInitalState = {
    listUser?: user[]
    UserByID?: user
}
const initialState: userInitalState = {

}
const UserSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getUserByIDThunk.fulfilled, (state, { payload }) => {
                state.UserByID = payload
            })
            .addCase(getUserThunk.fulfilled, (state, { payload }) => {
                state.listUser = payload
            })
    },
})
export const { actions: UserActions, reducer: UserReducer } = UserSlice