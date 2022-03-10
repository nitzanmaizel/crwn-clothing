import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';

import CheckoutHeader from './CheckoutHeader';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './CheckOutPage.scss';

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className='checkoutPage'>
      <CheckoutHeader />
      {cartItems.length ? (
        cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
      ) : (
        <div className='emptyMessage'>Your cart is empty</div>
      )}
      <div className='total'>TOTAL: ${total}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
