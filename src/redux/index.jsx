import { configureStore } from "@reduxjs/toolkit";
import toastReducer from './toastSlice/Slice';
import AuthSlice from "./Auth/Slice";
import errorReducer from './Error/Slice'; // Adjust the path as needed

const store = configureStore({
  reducer: {
    toast: toastReducer,
    Auth: AuthSlice,
    error: errorReducer,
  },
});

export default store;
