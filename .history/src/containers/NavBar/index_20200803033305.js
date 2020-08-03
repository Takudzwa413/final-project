import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  getNumberOfProducts = (products) => {
    if (products.length >= 1) {
      return products.reduce((sum, product) => {
        sum += product.quantity;
        return sum;
      }, 0);
    }
    return 0;
  };

  render() {
    return (
      <div>
  <div className='navigation-wrap bg-light start-header start-style'>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <nav className='navbar navbar-expand-md navbar-light'>
            <div className='left_area'>
              <h3>
                Takudzwa<span>Vengai</span>
              </h3>
            </div>
            <button
              class='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav ml-auto py-4 py-md-0'>
                <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4 active'>
                  <Link to='/'>
                    <a
                      className='nav-link '
                      data-toggle='dropdown'
                      href='/'
                      role='button'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                </li>
                {/* <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                        <a className='nav-link' href='skills'>
                          Skills
                        </a>
                      </li> */}
                <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                <li>
                <Link to='/contact'>Contact</Link>
              </li>
                </li>
                <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                <li>
                <Link to='/login'>Login</Link>
              </li>
                </li>
                <li>
                <Link to='/cart'>
                  <span className='cart-items'>
                    {this.getNumberOfProducts(this.props.cartProducts)}
                  </span>
                </Link>
              </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {this.props.children}
</div>;

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cartProducts: state.cart.cartProducts,
  };
};

export default withRouter(connect(mapStateToProps, null)(NavBar));
