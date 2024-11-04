import React from 'react';
import { PawanKalyanMovies } from '../Data/PawanKalyanMovies';
import Header from '../Component/Header';

function PawanKalyanMoviesList() {
  return (
    <div>
      <Header />
      <div className="PawanKalyanMoviesList">
        {PawanKalyanMovies.map((movie, index) => (
          <div key={index} className="movie-card">
            <h3>{movie.title}</h3>
            <img src={movie.Image} alt={movie.title} />
            <p>Year: {movie.year}</p>
            <p>Director: {movie.director}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PawanKalyanMoviesList;
