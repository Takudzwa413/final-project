import React, { Component } from 'react';
import Header from '../Header/index.js';
import ProductList from '../../containers/ProductList/index.js';
import './styles.css';
import firebase from '../firebase/firebase';
import Register from '../Register/Register';
import index from '../../index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
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
        {this.state.user ? <index /> : <Register />}
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
