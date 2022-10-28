import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  All: [],
  loading: false,
};

export const getAll = createAsyncThunk("all/getAll", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=57b75fd3bb7f3e28a2362d6568184208"
  );
  const result = await response.json();
  return result;
});

export const allSlice = createSlice({
  name: "all",
  initialState,
  reducers: {},
  extraReducers: {
    [getAll.pending]: (state) => {
      state.loading = true;
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.All = payload;
    },
    [getAll.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default allSlice.reducer;
