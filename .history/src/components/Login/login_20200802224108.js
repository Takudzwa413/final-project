import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from './base';
import { AuthContext } from './Auth';

const login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }
  return (
    <div className='login-page'>
      <div className='form_page'>
        <form className='login-form' onSubmit={handleLogin}>
          <input name='email' type='email' placeholder='email' />
          <input name='password' type='password' placeholder='password' />
          <button type='submit'>login</button>
          <p className='message'>
            Not registered?
            <button>Create Account</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;
