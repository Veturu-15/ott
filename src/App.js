import React from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Newmovies from './pages/Newmovies';
import Mahesh from './pages/Mahesh';
import Pras from './pages/Pras';
import Newntr from './pages/Newntr';
import Newnani from './pages/Newnani';
import Dashboard from './pages/Dashboard';
import Teluguheros from './pages/Teluguheros'

function App() {
  return (
    <div className='Main'>
      <Router> 
        <Routes>
          <Route path='/' element={<Login />} /> 
          <Route path='/home' element={<Home/>}/>
          <Route path='/telugu' element={<Teluguheros/>}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/pawankalyana' element={<Newmovies />} />
          <Route path='/maheshbabu' element={<Mahesh/>}/>
          <Route path='/prabhas' element={<Pras/>}/>
          <Route path='/ntr' element={<Newntr/>}/>
          <Route path='/nani' element={<Newnani/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
