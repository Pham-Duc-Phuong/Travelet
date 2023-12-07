import { createAsyncThunk } from "@reduxjs/toolkit";
import { CommentServices } from "services";

export const getCommentThunk = createAsyncThunk(
    "getCommentThunk",
    async (payload: string, { rejectWithValue }) => {
        try {
            const data = await CommentServices.getComment(payload)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)