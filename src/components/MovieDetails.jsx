import Header from "./Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const MovieDetails = () => {
  useEffect(() => {
    getMoviesReq();
    return console.log("done");
  }, []);
  const [details, setDetails] = useState({});
  const params = useParams();
  console.log(params.id);
  const getMoviesReq = async () => {
    const req = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=c93f440aabe098bfdb038163bd285432`
    );
    setDetails(req);
    console.log(req);
  };
  return (
    <>
      <Header />
      <div className="movieDetails">
        <div className="container">
          <div className="details">
            <div className="img">
              <img
                src={
                  `https://image.tmdb.org/t/p/w500` + details.data.poster_path
                }
                alt=""
              />
            </div>
            <div className="text">
              <p>{details.data.title}</p>
              <p>
                rating : <span>{details.data.vote_averag}</span> (
                {details.data.vote_count}{" "}
                <i className="bi bi-star-fill text-warning"></i>){" "}
              </p>
              <p>release date : {details.data.release_date}</p>
              <button>
                watch <i className="bi bi-tv"></i>
              </button>
            </div>
          </div>
          <div className="story">
            <p>{details.data.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
