import React from 'react';
import { PawanKalyanMovies } from '../Data/PawanKalyanMovies';
import Header from '../Component/Header';
function PawanKalyanMoviesList() {
  return (
    <div style={{textDecoration:'none', color:'white'}}>
      <Header />
      <div className="PawanKalyanMoviesList">
        {PawanKalyanMovies.map((movie) => (
          
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <img src={movie.Image} alt={`Poster of ${movie.title}`} />
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

export default PawanKalyanMoviesList;
