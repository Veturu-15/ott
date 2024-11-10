import React from 'react';
import { movies } from '../Data/Nani';
import Header from '../Component/Header';

function Newnani() {
  return (
    <div>
      <Header/>
    <div className='Newnani'>
      {movies.map((e) => (
        <div> 
         
          <img src={e.image} alt={e.title} /> 
          <p>Title:{e.title}</p>
          <p>Year:{e.year}</p>
          
        </div>
      ))}
    </div>
    </div>
  );
}

export default Newnani;
