import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>logged in</h3>
        <button>logout</button>
      </div>
    );
  }
}

export default Home;
