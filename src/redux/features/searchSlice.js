import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  Search: [],
  loading: false,
};

export const getSearch = createAsyncThunk(
  "search/getSearch",
  async (name = false) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=57b75fd3bb7f3e28a2362d6568184208&query=${name}`
    );
    const result = await response.json();
    return result.results;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: {
    [getSearch.pending]: (state) => {
      state.loading = true;
    },
    [getSearch.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Search = payload;
    },
    [getSearch.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default searchSlice.reducer;
