import { Pagination } from "@mui/material";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../features/movieSlice";
import axios from "axios";
const Paginationcom = () => {
  const dispatch = useDispatch();
  const { pages, keyword } = useSelector((state) => state.movies);
  const handleChange = async (data) => {
    const req = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_movie_API_KEY}&language=en-US&page=${data.target.innerText}`
    );
    const req1 = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_movie_API_KEY}&query=${keyword}&language=en-US&page=${data.target.innerText}`
    );
    keyword === ""
      ? dispatch(getMovies(req.data))
      : dispatch(getMovies(req1.data));
  };
  return (
    pages > 1 && (
      <div>
        <Pagination
          count={pages}
          className="paginate"
          variant="outlined"
          color="primary"
          shape="rounded"
          sx={{
            background: "transparent",
            display: "flex",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 5,
          }}
          onChange={handleChange}
        />
      </div>
    )
  );
};

export default Paginationcom;
