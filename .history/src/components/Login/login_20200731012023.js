import React, { useState, useEffect, Fragment } from 'react';
import { Input } from '@material-ui/core';
import { makeStyles, Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { auth } from '../firebase/firebase';
import './Login.css';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const Login = () => {
  /**new ones */
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [open, setOpen] = useState(false);

  const [openSignIn, setOppenSignIn] = useState(false);

  const [Username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in
        console.log(authUser);
        setUser(authUser);
      } else {
        // user has logged out
        setUser(null);
      }
    });

    return () => {
      //perform some cleanup actions
      unsubscribe();
    };
  }, [user, Username]);

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: Username,
        });
      })
      .catch((error) => alert(error.message));

    setOpen(false);
  };

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setOppenSignIn(false);
  };
  return (
    <Fragment>
      <div className='login'>
        <div className='loginBtn'>
          <Modal open={open} onClose={() => setOpen(false)}>
            <div style={modalStyle} className={classes.paper}>
              <form className='app__signup'>
                <Input
                  placeholder='Username'
                  type='text'
                  value={Username}
                  onChange={(e) => setusername(e.target.value)}
                />
                <Input
                  placeholder='email'
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type='submit' onClick={signUp}>
                  Sign Up
                </Button>
              </form>
            </div>
          </Modal>

          <Modal open={openSignIn} onClose={() => setOppenSignIn(false)}>
            <div style={modalStyle} className={classes.paper}>
              <form className='app__signup'>
                <Input
                  placeholder='email'
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type='submit' onClick={signIn}>
                  Sign In
                </Button>
              </form>
            </div>
          </Modal>
        </div>

        <div className='app__header'>
          {user ? (
            <Button onClick={() => auth.signOut()}>Logout</Button>
          ) : (
            <div className='app__loginContainer'>
              <Button onClick={() => setOppenSignIn(true)}>Sign In</Button>
              <Button onClick={() => setOpen(true)}>Sign Up</Button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
