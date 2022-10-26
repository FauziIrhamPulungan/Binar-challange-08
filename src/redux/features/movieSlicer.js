import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  Movies: [],
  loading: false,
};

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  const response = await fetch("https://notflixtv.herokuapp.com/api/v1/movies");
  const result = await response.json();
  //   console.log("result", result);
  return result;
});

export const movieSlicer = createSlice({
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

export default movieSlicer.reducer;
