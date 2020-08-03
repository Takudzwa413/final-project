import React, { Component } from 'react';
import Header from '../Header/index.js';
import ProductList from '../../containers/ProductList/index.js';
import './styles.css';
import fire from '../Login/fire';
import index from '../../index';
import login from '../Login/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className='App'>
        {this.state.user ? <index /> : <login />}
        <Header />
        <div className='row'>
          <div className='col-sm-12'>
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
