import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookServices } from "services";

export const listBookedThunk = createAsyncThunk(
    "checkBookedThunk",
    async (payload: number, { rejectWithValue }) => {
        try {
            const data = await BookServices.listBooked(payload)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)