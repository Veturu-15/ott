import React from 'react'
import {SalmanKhanMovies} from '../Data/Salman';
import Header from '../Component/Header';
function Salman() {
  return (
    <div>
      <Header/>
      <div className='saan'>
      {
         SalmanKhanMovies.map((e, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h1>{e.title}</h1>
              <img src={e.image} alt={e.title} style={{ height: '300px', width: '200px' }} />
              <p>Year: {e.year}</p>
              <p>Director: {e.director}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Salman
