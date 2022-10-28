import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movieSlicer";
import allReducer from "../features/allSlice";
import detailReducer from "../features/detailSlice";
import searchReducer from "../features/searchSlice";
import loginReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    movies: moviesReducer,
    all: allReducer,
    detail: detailReducer,
    search: searchReducer,
  },
});
