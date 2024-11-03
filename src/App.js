import React from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Newmovies from './pages/Newmovies';
import Mahesh from './pages/Mahesh'

function App() {
  return (
    <div className='Main'>
      <Router> 
        <Routes>
          <Route path='/' element={<Login />} /> 
          <Route path='/home' element={<Home/>}/>
          <Route path='/pawankalyana' element={<Newmovies/>}/>
          <Route path='/pawankalyana1' element={<Mahesh/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
