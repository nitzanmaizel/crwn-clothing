import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cartSelectors';

import CheckoutHeader from './CheckoutHeader';

import './CheckOutPage.scss';

const CheckOutPage = ({ cartItems }) => {
  return (
    <div className='checkoutPage'>
      <CheckoutHeader />
      <div className='total'>TOTAL: $0</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckOutPage);
