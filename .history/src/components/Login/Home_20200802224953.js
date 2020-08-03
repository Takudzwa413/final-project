import React, { Fragment } from 'react';
import app from './base';

const Home = () => {
  return (
    <Fragment>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </Fragment>
  );
};

export default Home;
