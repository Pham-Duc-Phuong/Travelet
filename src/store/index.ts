import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootReducers } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { getUserByIDThunk } from "./Users";
import { getID } from "utils";
import { LocationThunk } from "./Location";

export const store = configureStore({
    reducer: rootReducers
})

store.dispatch(getUserByIDThunk(getID()))
store.dispatch(LocationThunk())

// UseState in TypeScript
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// UseDispatch in TypeScript
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch