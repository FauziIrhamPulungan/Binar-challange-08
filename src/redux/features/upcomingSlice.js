import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  Upcoming: [],
  loading: false,
};

export const getUpcoming = createAsyncThunk(
  "upcoming/getUpcoming",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=57b75fd3bb7f3e28a2362d6568184208&language=en-US&page=1"
    );

    const result = await response.json();
    return result;
  }
);

export const upcomingSlice = createSlice({
  name: "upcoming",
  initialState,
  reducers: {},
  extraReducers: {
    [getUpcoming.pending]: (state) => {
      state.loading = true;
    },
    [getUpcoming.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Upcoming = payload;
    },
    [getUpcoming.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default upcomingSlice.reducer;
