import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./Auth";
import { UserReducer } from "./Users";
import { locationReducer } from "./Location";
import { RoomReducer } from "./Room";
import { BookReducer } from "./Book";

export const rootReducers = combineReducers({
    Auth: AuthReducer,
    User: UserReducer,
    Location: locationReducer,
    Room: RoomReducer,
    Book: BookReducer,
})