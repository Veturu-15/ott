import React from 'react';
import { movies } from './Data/Nani';
import { useParams } from 'react-router-dom';
import Header from './Component/Header';

function Singlenani() {
  const { id } = useParams(); 
  const hello = movies.find((e) => e.id === Number(id)); 

  return (
    <div >
      <Header />
      {hello ? (
        <div className='singlenani'>
            <img src={hello.image} alt=""  height={"300px"}/>
          <p>{hello.title}</p>
          <p>{hello.year}</p>
          {hello.videoUrl && (
              <p >
                <a href={hello.videoUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}>
                  Watch the Movie
                </a>
              </p>
            )}
        </div>
      ) : (
        <p>Movie not found.</p> 
      )}
    </div>
  );
}

export default Singlenani;
