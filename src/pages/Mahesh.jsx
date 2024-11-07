import React from 'react';
import { MaheshBabuMovies } from '../Data/Maheshbabu';
import Header from '../Component/Header';
function Maheshmovies() {
  return (
   <div>
    <Header/>
    <div className="MaheshBabuMoviesList">
      {MaheshBabuMovies.map((movie, index) => (
        <div key={index} className="movie-card">
          <h3>{movie.title}</h3>
          <img src={movie.Image} alt={movie.title} />
          <p>Year: {movie.year}</p>
          <p>Director: {movie.director}</p>
          {movie.videoUrl && (
              <p >
                <a href={movie.videoUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}>
                  Watch the Movie
                </a>
              </p>
            )}
        </div>
      ))}
    </div>
    </div>
  );
}

export default Maheshmovies;
