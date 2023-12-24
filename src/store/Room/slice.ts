import { createSlice } from "@reduxjs/toolkit";
import { Room } from "types";
import { layPhongTheoIDThunk, layPhongTheoViTriThunk, layPhongThunk } from ".";

type RoomSliceInitialState = {
    layPhong?: Room[]
    layPhongTheoViTri?: Room[]
    layPhongTheoID?: Room
}

const initialState: RoomSliceInitialState = {

}

const RoomSlice = createSlice({
    name: 'RoomSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(layPhongThunk.fulfilled, (state, { payload }) => {
                state.layPhong = payload
            })
            .addCase(layPhongTheoViTriThunk.fulfilled, (state, { payload }) => {
                state.layPhongTheoViTri = payload
            })
            .addCase(layPhongTheoIDThunk.fulfilled, (state, { payload }) => {
                state.layPhongTheoID = payload
            })
    },
})
export const { reducer: RoomReducer, actions: RoomActions } = RoomSlice