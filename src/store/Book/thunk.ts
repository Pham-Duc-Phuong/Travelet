import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookServices } from "services";

export const listBookedThunk = createAsyncThunk(
    "checkBookedThunk",
    async (_, { rejectWithValue }) => {
        try {
            const data = await BookServices.listBooked()
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)