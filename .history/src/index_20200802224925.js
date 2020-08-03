// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// Import create-react-app service worker (houses webpack, babel, etc. config)
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import About from './components/About';
import NavBar from './containers/NavBar';
import Cart from './containers/Cart';
import Checkout from './containers/Checkout';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ShowProduct from './containers/ShowProduct';
import login from './components/Login/login';
import Register from './components/Register/Register';
import './globalStyles.css';
import cartReducer from './containers/Cart/reducer';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Login/Home';
import { AuthProvider } from './components/Login/Auth';
import PrivateRoute from './components/Login/PrivateRoute';

const rootReducer = combineReducers({
  cart: cartReducer,
});

ReactDOM.render(
  <AuthProvider>
    <Provider store={createStore(rootReducer)}>
      <BrowserRouter>
        <BaseLayout>
          <NavBar>
            <Switch>
              <Route path='/contact' component={Contact} />
              <Route path='/checkout' component={Checkout} />
              <Route path='/cart' component={Cart} />
              <Route path='/about' component={About} />
              <Route path='/login' component={login} />
              <Route path='/register' component={Register} />
              <PrivateRoute exact path='/home' component={Home} />
              <Route path='/products/:type/:id' component={ShowProduct} />
              <Route path='/' component={App} />
            </Switch>
          </NavBar>
          <Footer />
        </BaseLayout>
      </BrowserRouter>
    </Provider>
    ,
  </AuthProvider>,
  document.getElementById('root')
);
registerServiceWorker();
