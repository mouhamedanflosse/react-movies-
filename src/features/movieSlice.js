import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movies: [],
  pages: 0,
  keyword : ""
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovies(state, action) {
      const item = action.payload;
      state.movies = item.results;
      state.pages = item.total_pages;
    },
    getQuery(state, action) {
      const item = action.payload;
      state.keyword = item;
      console.log(state.keyword);
    },
  },
});

export default movieSlice.reducer;
export const { getMovies, getPages, getQuery } = movieSlice.actions;
