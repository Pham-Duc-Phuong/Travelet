import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookServices } from "services";

export const listBookedByUserThunk = createAsyncThunk(
    "checkBookedByUserThunk",
    async (payload: number, { rejectWithValue }) => {
        try {
            const data = await BookServices.listBookedByUser(payload)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const listBookedThunk = createAsyncThunk(
    'listBookedThunk',
    async (_, { rejectWithValue }) => {
        try {
            const data = await BookServices.listBooked()
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)