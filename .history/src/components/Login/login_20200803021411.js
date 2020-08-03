import React from 'react';
import './login.css';

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div className='login-page'>
        <div className='form_page'>
          <form className='login-form'>
            <input id='email' type='email' placeholder='email' />
            <input id='password' type='password' placeholder='password' />
            <button type='submit'>login</button>
            <p className='message'>
              Not registered?
              <button>Create Account</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default login;
