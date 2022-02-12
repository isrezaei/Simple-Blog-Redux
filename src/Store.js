import {configureStore} from "@reduxjs/toolkit";
import PostSlice from "./Posts/PostSlice";
import UsersSlice from "./Users/UserSlice";

export const Store = configureStore({
    reducer : {PostSlice , UsersSlice}
})