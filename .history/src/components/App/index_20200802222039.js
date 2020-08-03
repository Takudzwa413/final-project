import React, { Component } from 'react';
import Header from '../Header/index.js';
import ProductList from '../../containers/ProductList/index.js';
import './styles.css';
import fire from '../firebase/fire';
import 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
import 'firebase/database'; // for realtime database
import 'firebase/firestore'; // for cloud firestore
import 'firebase/messaging'; // for cloud messaging
import 'firebase/functions';

class App extends Component {
  render() {
    return (
      <div className='App'>
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
