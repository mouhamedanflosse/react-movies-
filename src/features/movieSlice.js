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
    // getPages(state,action) {
    //   const item = action.payload
    //   state.pages = item
    // },
    // async  getMoviesReq1(state,action) {
    //   const req = await axios.get(
    //     "https://api.themoviedb.org/3/movie/popular?api_key=c93f440aabe098bfdb038163bd285432&language=en-US&page=1"
    //     )
    //     state.movies = req.data.results
    //     console.log(state.movies)
    // }
  },
});

export default movieSlice.reducer;
export const { getMovies, getPages, getQuery } = movieSlice.actions;
