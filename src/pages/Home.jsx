import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Component/Header';
import Carousel from 'react-bootstrap/Carousel';
function Home() {
  return (
    <div className='container-fluid'>
      <Header />
      <div className='Carousel'>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img src="https://sund-images.sunnxt.com/72211/640x360_TholiPrema_72211_1c891803-dd10-4886-b280-684f2d7b05d0.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
       <img src="https://m.media-amazon.com/images/M/MV5BYWExODZhNWQtMDlmYi00YjMxLTk2YzQtNjRhNmZjMjJiOWMwXkEyXkFqcGc@._V1_QL75_UX480_.jpg" alt=""  />
      </Carousel.Item>
      <Carousel.Item interval={500}>
       <img src="https://m.media-amazon.com/images/M/MV5BMDI2N2M5ZjQtNDM2Yi00NjRlLThjOWEtZTI0NjJkOTdkN2ZlXkEyXkFqcGc@._V1_.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
       <img src="https://m.media-amazon.com/images/M/MV5BMTUyMTg0MTA1OF5BMl5BanBnXkFtZTgwMDg2MjMwMjE@._V1_.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
       <img src="https://english.mathrubhumi.com/image/contentid/policy:1.6429771:1644683190/image.JPG?$p=66a25a7&f=16x10&w=852&q=0.8" alt="" />
      </Carousel.Item>
    </Carousel>
    </div>
      <main>
        <Container>
          <Row className="justify-content-start">
            <Col sm={5} className="text-center">
              <Link to='/telugu' style={{ textDecoration: 'none', color: 'black' }}>
                <h2 style={{ color: 'white' }}>Telugu Movies</h2>
                <img 
                  src="https://www.telugutimes.net/storage/gallery/cinema/wall-papers/guntur-karam-movie-posters/guntur-karam-movie-posters-1.jpg" 
                  alt="Telugu Movies" 
                  style={{ height: '300px', width: '200px' }} 
                />
              </Link>
            </Col>

            <Col sm={5} className="text-center">
              <Link to='/hindi' style={{ textDecoration: 'none', color: 'black' }}>
                <h2 style={{ color: 'white' }}>Hindi Movies</h2>
                <img 
                  src="https://m.media-amazon.com/images/M/MV5BYjliYjA0MWUtMjVkNi00MDc0LTg1MDgtYWExNGM0OWQ1NjBhXkEyXkFqcGc@._V1_.jpg" 
                  alt="Hindi Movies" 
                  style={{ height: '300px', width: '200px' }} 
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Home;
