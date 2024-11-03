import React from 'react';
import { PawanKalyanMovies } from '../Data/PawanKalyanMovies';

function PawanKalyanMoviesList() {
  return (
    <div className="PawanKalyanMoviesList">
      {PawanKalyanMovies.map((movie, index) => (
        <div key={index} className="movie-card">
          <h3>{movie.title}</h3>
          <img src={movie.Image} alt="" />
          <p>Year: {movie.year}</p>
          <p>Director: {movie.director}</p>
        </div>
      ))}
    </div>
  );
}

export default PawanKalyanMoviesList;
