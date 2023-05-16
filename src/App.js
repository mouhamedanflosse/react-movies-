import "./App.css";
import Header from "./components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import MovieList from "./components/MovieList";
import Paginationcom from "./components/pagination";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<MovieList />}/>
          <Route path="movieDetails" element ={<MovieDetails />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
