import { createSlice } from "@reduxjs/toolkit"
import { getUserByIDThunk } from "."
import { user } from "types"

type userInitalState = {
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
    },
})
export const { actions: UserActions, reducer: UserReducer } = UserSlice