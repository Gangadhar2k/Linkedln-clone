import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
    <img src={'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg'} alt="" srcset="" />
    <form>
      <input placeholder='Enter your Name' type='text'/>
      <input placeholder='Enter Your mail Id' type='mail'/>
      <input placeholder='Enter Password' type='password'/>
      <button type='submit'>Log In</button>
    </form>

    <p>All Ready a member <span >Log In</span></p>
  </div>
  )
}

export default Register