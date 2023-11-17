import { createSlice } from "@reduxjs/toolkit"
import { Location, LocationByPage } from "types"
import { LocationByPageThunk, LocationThunk } from "."

type locationInitalState = {
    location?: Location[]
    locationByPage?: Location[]
}
const initialState: locationInitalState = {

}
const locationSlice = createSlice({
    name: "locationSlice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(LocationThunk.fulfilled, (state, {payload})=>{
                state.location = payload
            })
            .addCase(LocationByPageThunk.fulfilled, (state, {payload})=>{
                console.log('payload', payload)
                state.locationByPage = payload
            })
    },
})
export const { actions: locationActions, reducer: locationReducer } = locationSlice