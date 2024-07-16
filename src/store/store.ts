import { configureStore } from "@reduxjs/toolkit";
import userReducer, { IUserSlice } from "./userSlice"
const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export type RootState = {
    user: IUserSlice
};
export default store;