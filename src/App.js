import React from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div className='Main'>
      <Router> 
        <Routes>
          <Route path='/' element={<Login />} /> 
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
