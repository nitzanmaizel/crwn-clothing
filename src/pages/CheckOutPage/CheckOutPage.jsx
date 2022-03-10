import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cartSelectors';

import CheckoutHeader from './CheckoutHeader';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './CheckOutPage.scss';

const CheckOutPage = ({ cartItems }) => {
  return (
    <div className='checkoutPage'>
      <CheckoutHeader />
      {cartItems.length ? (
        cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
      ) : (
        <div className='emptyMessage'>Your cart is empty</div>
      )}
      <div className='total'>TOTAL: $0</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckOutPage);
