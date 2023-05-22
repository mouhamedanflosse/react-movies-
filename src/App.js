import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
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
