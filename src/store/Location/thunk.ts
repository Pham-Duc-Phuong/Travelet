import { createAsyncThunk } from "@reduxjs/toolkit";
import { LocationServices } from "services";

export const LocationThunk = createAsyncThunk(
    'LocationThunk',
    async (_, { rejectWithValue }) => {
        try {
            const data = await LocationServices.location()
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const LocationByPageThunk = createAsyncThunk(
    'LocationByPageThunk',
    async (_, { rejectWithValue }) => {
        try {
            const data = await LocationServices.locationByPage()
            return data.data.content.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)