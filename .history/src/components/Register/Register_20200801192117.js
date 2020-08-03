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
    <div className='login-page'>
      <div className='form'>
        <form className='register-form'>
          <input type='text' placeholder='name' />
          <input type='password' placeholder='password' />
          <input type='text' placeholder='email address' />
          <button onClick={login} type='submit'>
            create
          </button>
          <p className='message'>
            Already registered? <a href='#'>Sign In</a>
          </p>
        </form>
        <form className='login-form'>
          <input type='text' placeholder='username' />
          <input type='password' placeholder='password' />
          <button>login</button>
          <p className='message'>
            Not registered? <a href='#'>Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
