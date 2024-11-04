import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Component/Header';

function Home() {
  return (
    <div className='container-fluid'>
      <Header/>
      <header>
        <h1 style={{ color: 'green', textAlign: 'center' }}>Top 5 Heroes of Telugu Film Industry</h1>
      </header>
      <main>
        <Container>
        <Row>
          <br />
         <Link to='/telugu' style={{textDecoration:'none', color:'black'}}> <br /><Col sm={4}>
            <h2 style={{color:'white'}}>Telugu Movies</h2>
            <img 
              src="https://www.telugutimes.net/storage/gallery/cinema/wall-papers/guntur-karam-movie-posters/guntur-karam-movie-posters-1.jpg" 
              alt="Telugu Movies" 
              style={{ height: '300px', width: '200px' }} 
            />
          </Col></Link>
        </Row>
        </Container>
      </main>
    </div>
  );
}

export default Home;
