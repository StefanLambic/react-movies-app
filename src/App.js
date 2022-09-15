import "./App.css";
import SearchIcon from "./search.svg";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
// 7065bd53
const API_KEY = "7065bd53";
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

const movie1 = {
  Title: "Pokémon: Detective Pikachu",
  Year: "2019",
  imdbID: "tt5884052",
  Type: "movie",
  Poster: "N/A",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Pokemon");
  }, []);
  return (
    <div className="App">
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
