import React from 'react';

import Header from '../Header/index.js';
import ProductList from '../../containers/ProductList/index.js';

import './styles.css';

const App = () => (
  <div className='App'>
    <Header />
    <div className='row'>
      <div className='col-sm-12'>
        <ProductList />
      </div>
    </div>
  </div>
);

export default App;
