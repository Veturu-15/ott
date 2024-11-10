import React from 'react';
import { movies } from '../Data/Nani';
import Header from '../Component/Header';
import { Link } from 'react-router-dom';  

function Newnani() {
  return (
    <div>
      <Header />
      <div className="Newnani">
        {movies.map((e) => (
          <div key={e.id} className="movie-card">
            <Link to={`/nani/${e.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img src={e.image} alt={e.title} className="movie-image" />
              <p style={{color:'white'}}>Title: {e.title}</p>
              <p style={{color:'white'}} >Year: {e.year}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newnani;
