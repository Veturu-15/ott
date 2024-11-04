import React from 'react';
import { ntrMovies } from '../Data/Ntr';
import Header from '../Component/Header';

function Newntr() {
  return (
    <div>
      <Header/>
      <div className='ntrmovies'>
        {ntrMovies.map((movie) => (
          <div key={movie.id} className='movie-card'>
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

export default Newntr;
