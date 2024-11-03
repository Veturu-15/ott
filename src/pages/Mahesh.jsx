import React from 'react';
import { MaheshBabuMovies } from '../Data/MaheshBabuMovies';

function Maheshmovies() {
  return (
    <div className="MaheshBabuMoviesList">
      {MaheshBabuMovies.map((movie, index) => (
        <div key={index} className="movie-card">
          <h3>{movie.title}</h3>
          <img src={movie.Image} alt={movie.title} />
          <p>Year: {movie.year}</p>
          <p>Director: {movie.director}</p>
        </div>
      ))}
    </div>
  );
}

export default Maheshmovies;
