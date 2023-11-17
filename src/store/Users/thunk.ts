import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserServices } from "services";

export const getUserByIDThunk = createAsyncThunk(
    'getUserByIDThunk',
    async (payload:string, {rejectWithValue}) => {
        try {
            const data = await UserServices.getUserByID(payload)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)