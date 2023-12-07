import { createSlice } from "@reduxjs/toolkit";
import { getCommentThunk } from "./thunk";
import { getComment } from "types";
type CommentSliceInitialState = {
    getComment?: getComment[]
}

const initialState: CommentSliceInitialState = {}

const CommentSlice = createSlice({
    name: 'CommentSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCommentThunk.fulfilled, (state, { payload }) => {
                state.getComment = payload
            })
    },
})
export const { reducer: CommentReducer, actions: CommentActions } = CommentSlice