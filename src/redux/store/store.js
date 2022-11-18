import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/popularSlicer";
import allReducer from "../features/allSlice";
import detailReducer from "../features/detailSlice";
import searchReducer from "../features/searchSlice";
import loginReducer from "../features/auth/authSlice";
import castReducer from "../features/Castslice";
import genreReducer from "../features/Categoryslice";
import topratedReducer from "../features/topratedSlice";
import upcomingReducer from "../features/upcomingSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    movies: moviesReducer,
    all: allReducer,
    category: genreReducer,
    toprated: topratedReducer,
    upcoming: upcomingReducer,
    detail: detailReducer,
    cast: castReducer,
    search: searchReducer,
  },
});
