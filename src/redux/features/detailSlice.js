import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  Detail: [],
  loading: false,
};

export const getDetail = createAsyncThunk(
  "detail/getDetail",
  async (id = false) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=57b75fd3bb7f3e28a2362d6568184208`
    );
    const result = await response.json();
    return result;
  }
);

export const detailSlice = createSlice({
  name: "all",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetail.pending]: (state) => {
      state.loading = true;
    },
    [getDetail.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Detail = payload;
    },
    [getDetail.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default detailSlice.reducer;
