import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movieSlicer";
// import genresReducer from "../feature/genres";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    // genres: genresReducer,
  },
});
