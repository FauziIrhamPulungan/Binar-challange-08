import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  Movies: [],
  loading: false,
};

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=57b75fd3bb7f3e28a2362d6568184208"
  );
  const result = await response.json();
  return result;
});

export const popularSlicer = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.loading = true;
    },
    [getMovies.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Movies = payload;
    },
    [getMovies.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default popularSlicer.reducer;
