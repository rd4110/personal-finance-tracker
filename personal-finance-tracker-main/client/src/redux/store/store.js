import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/Authentication-Slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});