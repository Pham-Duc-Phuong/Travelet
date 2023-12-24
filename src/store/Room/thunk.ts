import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomServices } from "services";

export const layPhongThunk = createAsyncThunk(
    "layPhongThunk",
    async (_, { rejectWithValue }) => {
        try {
            const data = await RoomServices.layPhong()
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const layPhongTheoViTriThunk = createAsyncThunk(
    "layPhongTheoViTriThunk",
    async (payload: string, { rejectWithValue }) => {
        try {
            const data = await RoomServices.layPhongTheoViTri(payload)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const layPhongTheoIDThunk = createAsyncThunk(
    "layPhongTheoIDThunk",
    async (payload: string, { rejectWithValue }) => {
        try {
            const data = await RoomServices.layPhongTheoID(payload)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)