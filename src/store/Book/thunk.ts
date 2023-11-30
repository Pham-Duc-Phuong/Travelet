import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookServices } from "services";
import { booked } from "types";

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
// export const bookingThunk = createAsyncThunk(
//     "bookingThunk",
//     async (params: booked, { rejectWithValue }) => {
//         try {
//             const data = await BookServices.booking(params)
//             return data.data.content
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }

// )