import React from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Newmovies from './pages/Newmovies';
import Mahesh from './pages/Mahesh';
import Pras from './pages/Pras';

function App() {
  return (
    <div className='Main'>
      <Router> 
        <Routes>
          <Route path='/' element={<Login />} /> 
          <Route path='/home' element={<Home />} />
          <Route path='/pawankalyana' element={<Newmovies />} />
          <Route path='/maheshbabu' element={<Mahesh/>}/>
          <Route path='/prabhas' element={<Pras/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
