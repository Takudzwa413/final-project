import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import './Register.css';

const Register = () => {
  const login = (event) => {
    event.preventDefault(); //this stops the page from refresh
  };

  const register = (event) => {
    event.preventDefault(); //this stops the page from refresh
  };
  return (
    <div className='login'>
      <div className='login_container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type='email' />
          <h5>Password</h5>
          <input type='password' />
          <button onClick={login} type='submit' className='login_signInButton'>
            Sign In
          </button>
        </form>
        <button onClick={register}>Create Account</button>
      </div>
    </div>
  );
};

export default Register;
