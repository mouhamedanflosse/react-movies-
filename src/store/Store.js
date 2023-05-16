import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";

const Store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
export default Store;
