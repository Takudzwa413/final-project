import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import './Register.css';

const Register = () => {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  const login = (event) => {
    event.preventDefault(); //this stops the page from refresh
  };

  const register = (event) => {
    event.preventDefault(); //this stops the page from refresh
  };
  return (
    <div className='login-page'>
      <div className='form'>
        <form className='login-form'>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <button onClick={login} type='submit'>
            login
          </button>
          <p className='message'>
            Not registered?
            <button onClick={register}>Create Account</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
