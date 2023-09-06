import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <img src={'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg'} alt="" srcset="" />
      <form>
        <input placeholder='Enter Your mail Id' type='mail'/>
        <input placeholder='Enter Password' type='password'/>
        <button type='submit'>Log In</button>
      </form>

      <p>New to LinkedIn? <span>Join Now</span></p>
    </div>
  )
}

export default Login;