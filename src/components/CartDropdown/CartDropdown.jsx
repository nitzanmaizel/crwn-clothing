import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cartDropdown'>
      <div className='cartItems'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton title='GO TO CHECKOUT' />
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
