import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies, getMoviesReq1 } from "../features/movieSlice";
import axios from "axios";
import Paginationcom from "./pagination"

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    getMoviesReq();
  }, []);
  const getMoviesReq = async () => {
    const req = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=c93f440aabe098bfdb038163bd285432&language=en-US&page=1"
    );
    dispatch(getMovies(req.data));
  };
  return (
    <div className="movies">
      <div className="container">
        {movies.length >= 1 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie">
              <img
                src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                alt={movie.title}
              />
              <div className="text">
                <div className="rating">
                  <p>{movie.vote_average.toFixed(1)}</p>
                  <div className="rating-num">
                    <span>{movie.vote_count}</span>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                </div>
                <p className="title">{movie.title}</p>
                <p className="rel-date">{movie.release_date}</p>
              </div>
            </div>
          ))
        ) : (
          <h3 className="empty-list">there's no movies to show</h3>
        )}
        <Paginationcom/>
      </div>
    </div>
  );
};

export default MovieList;
