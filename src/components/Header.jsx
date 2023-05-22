import { useDispatch } from "react-redux";
import { getMovies,getQuery } from "../features/movieSlice";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg"

const Header = () => {
  const dispatch = useDispatch()

  const searchForMovie = async (query) => {
    if (query === "") {
      const req = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=c93f440aabe098bfdb038163bd285432&language=en-US&page=1"
      )
      
      return dispatch(getMovies(req.data))
    }
    const req = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=c93f440aabe098bfdb038163bd285432&query=${query}&language=en-US&page=3`
    )
    dispatch(getMovies(req.data))
    dispatch(getQuery(query))
  }

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
        <img src={logo} alt="" />
        </Link>
        <form action="post">
          <input type="text" onChange={(e) => searchForMovie(e.target.value)}/>
        <i className="bi bi-search"></i>
        </form>
      </div> 
    </div>
  );
};

export default Header;
