import React from 'react';
import { prabhasMovies } from './Data/Prabhas';

function Pras() {
  return (
    <div>
      <div className="PrabhasMoviesList">
        {prabhasMovies.map((movie, index) => (
          <div key={index} className="movie-card">
            <h3>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} />
            <p>Year: {movie.year}</p>
            <p>Director: {movie.director}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pras;
