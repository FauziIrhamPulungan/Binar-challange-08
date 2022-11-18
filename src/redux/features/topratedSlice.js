import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  Toprated: [],
  loading: false,
};

export const getToprated = createAsyncThunk(
  "toprated/getToprated",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=57b75fd3bb7f3e28a2362d6568184208&language=en-US&page=1"
    );

    const result = await response.json();
    return result;
  }
);

export const topratedSlice = createSlice({
  name: "toprated",
  initialState,
  reducers: {},
  extraReducers: {
    [getToprated.pending]: (state) => {
      state.loading = true;
    },
    [getToprated.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Toprated = payload;
    },
    [getToprated.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default topratedSlice.reducer;
