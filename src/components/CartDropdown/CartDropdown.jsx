import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cartDropdown'>
      <div className='cartItems' />
      <CustomButton title='GO TO CHECKOUT' />
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
