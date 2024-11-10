import React from 'react';
import { ntrMovies } from '../Data/Ntr';
import Header from '../Component/Header';
import { Link } from 'react-router-dom';

function Newntr() {
  return (
    <div>
      <Header />
      <div className='ntrmovies'>
        {ntrMovies.map((movie) => (
          <Link 
            to={`/ntr/${movie.id}`} 
            key={movie.id} 
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div className='movie-card'>
              <h3>{movie.title}</h3>
              <img src={movie.image} alt={movie.title} />
              <p>Year: {movie.year}</p>
              <p>Director: {movie.director}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Newntr;
