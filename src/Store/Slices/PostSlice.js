import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: JSON.parse(localStorage.getItem("posts")) || [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
