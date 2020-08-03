import React from 'react';
import './login.css';
import fire from './fire';

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  signIn(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='login-page'>
        <div className='form_page'>
          <form className='login-form'>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='email'
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              id='password'
              name='password'
              type='password'
              placeholder='password'
              onChange={this.handleChange}
              value={this.state.password}
            />
            <button type='submit' onClick={this.signIn}>
              login
            </button>
            <p className='message'>
              Not registered?
              <button onClick={this.signup}>Create Account</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default login;
