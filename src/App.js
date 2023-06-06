import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//  import { env } from 'process';
function App() {
  console.log(process.env.REACT_APP_hi)
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<MovieList />}/>
          <Route path="movieDetails/:id" element ={<MovieDetails />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
