import React from 'react';
import { prabhasMovies } from '../Data/Prabhas';
import Header from '../Component/Header';

function Pras() {
  return (
    <div >
      <Header/>
      <div className="PrabhasMoviesList">
        {prabhasMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
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