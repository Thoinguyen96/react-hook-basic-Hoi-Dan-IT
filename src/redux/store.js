import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import userReducer from "./slice/userSlice"; // rename
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
});
