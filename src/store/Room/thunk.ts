import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomServices } from "services";

export const layPhongTheoViTriThunk = createAsyncThunk(
    "layPhongTheoViTriThunk",
    async (payload: number, {rejectWithValue}) => { 
        try {
            const data = await RoomServices.layPhongTheoViTri(payload)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)