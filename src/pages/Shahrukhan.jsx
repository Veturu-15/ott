import React from 'react';
import {ShahRukhKhanMovies} from '../Data/ShahRukhKhanmovie'
import Header from '../Component/Header';

function Shahrukhan() {
  return (
    <div>
      <Header />
      <div className='Shah'>
        {
          ShahRukhKhanMovies.map((e, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h1>{e.title}</h1>
              <img src={e.Image} alt={e.title} style={{ height: '300px', width: '200px' }} />
              <p>Year: {e.year}</p>
              <p>Director: {e.director}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Shahrukhan;
