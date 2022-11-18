import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  Credits: { cast: [] },
  loading: false,
};

export const getCast = createAsyncThunk("cast/getCast", async (id) => {
  const API_KEY = "57b75fd3bb7f3e28a2362d6568184208";
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  // console.log("response", response);
  const result = await response.json();
  return result;
});
export const Castslice = createSlice({
  name: "cast",
  initialState,
  reducers: {},
  extraReducers: {
    [getCast.pending]: (state) => {
      state.load = true;
    },
    [getCast.fulfilled]: (state, { payload }) => {
      state.load = false;
      state.Credits = payload;
    },
    [getCast.rejected]: (state) => {
      state.load = false;
    },
  },
});

export default Castslice.reducer;
