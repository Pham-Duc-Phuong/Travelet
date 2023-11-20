import { createSlice } from "@reduxjs/toolkit";
import { Room } from "types";
import { layPhongTheoViTriThunk } from ".";

type RoomSliceInitialState = {
    layPhongTheoViTri?: Room[]
}

const initialState: RoomSliceInitialState = {

}

const RoomSlice = createSlice({
    name: 'RoomSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.
            addCase(layPhongTheoViTriThunk.fulfilled, (state, { payload }) => {
                state.layPhongTheoViTri = payload
            })
    },
})
export const { reducer: RoomReducer, actions: RoomActions } = RoomSlice