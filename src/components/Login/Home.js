import React from 'react';
import fire from './fire';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <h3>logged in</h3>
        <button onClick={this.logout}>logout</button>
      </div>
    );
  }
}

export default Home;
