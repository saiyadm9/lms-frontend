import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCourses } from "@/app/apiHandler.js/courses";

// Async action to fetch courses from API
export const getCourses = createAsyncThunk("courses/getCourses", async () => {
  const data = await fetchCourses();
  return data;
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    clearCourses: (state) => {
      state.data = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearCourses } = courseSlice.actions;
export default courseSlice.reducer;
