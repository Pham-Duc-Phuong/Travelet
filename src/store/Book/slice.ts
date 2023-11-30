import { createSlice } from "@reduxjs/toolkit"
import { booked } from "types"
import { listBookedThunk } from "."

type BookInitialState = {
    listBooked?: booked[]
}
const initialState: BookInitialState = {

}
const BookSlice = createSlice({
    name: 'BookSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(listBookedThunk.fulfilled, (state, { payload }) => {
                state.listBooked = payload
            })
    },
})
export const { actions: BookActions, reducer: BookReducer } = BookSlice