import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slices/PostSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
