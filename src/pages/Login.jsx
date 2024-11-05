import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
        <div className='inside'>
           <img src="https://wallpapercat.com/w/full/c/7/d/115480-2560x1440-desktop-hd-netflix-wallpaper-photo.jpg" alt="" style={{height:'300px',width:'300px'}} />
      <input type="text" placeholder='Enter  user name:' /> 
        <br /> 
      <input type="Password" placeholder='Enter  password:' />
      <br /> 
    <Link to='/home'> <button className='btn btn-warning'>Sign In</button></Link> 
    <br />
        <p>OR</p>
        <p> Forgot password</p>
        
      </div>
    </div>
  )
}
