import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  Category: { genres: [] },
  loading: false,
};

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=57b75fd3bb7f3e28a2362d6568184208"
    );
    const result = await response.json();
    return result;
  }
);

export const Categoryslice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategory.pending]: (state) => {
      state.loading = true;
    },
    [getCategory.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Category = payload;
    },
    [getCategory.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default Categoryslice.reducer;
