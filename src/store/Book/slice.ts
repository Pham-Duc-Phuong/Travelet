import { createSlice } from "@reduxjs/toolkit"
import { booked } from "types"
import { listBookedByUserThunk, listBookedThunk } from "."

type BookInitialState = {
    listBooked?: booked[]
    listBookedByUser?: booked[]
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
            .addCase(listBookedByUserThunk.fulfilled, (state, { payload }) => {
                state.listBookedByUser = payload
            })
    },
})
export const { actions: BookActions, reducer: BookReducer } = BookSlice