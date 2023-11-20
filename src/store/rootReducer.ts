import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./Auth";
import { UserReducer } from "./Users";
import { locationReducer } from "./Location";
import { RoomReducer } from "./Room";

export const rootReducers = combineReducers({
    Auth: AuthReducer,
    User: UserReducer,
    Location: locationReducer,
    Room: RoomReducer,
})