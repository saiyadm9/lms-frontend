import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    userSignInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    userSignInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userSignOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  userSignInStart,
  userSignInSuccess,
  userSignInFailure,
  userSignOut,
} = userSlice.actions;
export default userSlice.reducer;
