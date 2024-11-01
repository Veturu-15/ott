import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
        <div className='inside'>
           
      <input type="text" placeholder='enter the user name:' /> 
        <br /> 
      <input type="Password" placeholder='Enter the password:' />
      <br /> 
    <Link to='/home'> <button className='btn btn-warning'>Sign In</button></Link> 
        <p>OR</p>
        <button>Use a sign-In code</button>
        <p > Forgot password</p>
        
      </div>
    </div>
  )
}
