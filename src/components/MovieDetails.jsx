const MovieDetails = () => {
  return (
    <div className="movieDetails">
      <div className="container">
        <div className="details">
          <div className="img">
            <img src="images/logo.jpg" alt="" />
          </div>
          <div className="text">
            <p>name : matrix </p>
            <p>
              rating : <span>6.9</span> (2134 <i className="bi bi-star-fill text-warning"></i>){" "}
            </p>
            <p>release date : 20/08/2018</p>
            <button>watch <i className="bi bi-tv"></i></button>
          </div>
        </div>
        <div className="story">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            nesciunt laudantium asperiores, et minus assumenda expedita animi
            consequatur nulla, fuga officia recusandae libero in architecto
            voluptatem laboriosam excepturi! Voluptas, perspiciatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
