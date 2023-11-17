import { createAsyncThunk } from "@reduxjs/toolkit"
import { LoginSchemaType } from "schema"
import { AuthService } from "services"

export const SigninThunk = createAsyncThunk(
    "SigninThunk",
    async (payload: LoginSchemaType, { rejectWithValue }) => {
        try {
            const data = await AuthService.login(payload)
            await new Promise((resolve) => setTimeout(resolve, 2000))
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)