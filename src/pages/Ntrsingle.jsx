import React from 'react';
import { ntrMovies } from '../Data/Ntr';
import { useParams } from 'react-router-dom';
import Header from '../Component/Header';

function Ntrsingle() {
  const { id } = useParams();  
  const nuvu = ntrMovies.find((e) => e.id === Number(id)); 

  return (
    <div>
      <Header />
      <div>
        {nuvu ? (
          <div className='nuvu'  > 
             <img src={nuvu.image} alt={nuvu.title} height={300}/> 
            <h1>{nuvu.title}</h1>  
            <p>Year: {nuvu.year}</p>  
            <p>Director: {nuvu.director}</p>  
            {nuvu.videoUrl && (
              <p >
                <a href={nuvu.videoUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}>
                  Watch the Movie
                </a>
              </p>
            )}
          </div>
        ) : (
          <p>Movie not found.</p>  
        )}
      </div>
    </div>
  );
}

export default Ntrsingle;
