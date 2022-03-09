import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../redux/cart/cartActions';

import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => {
  return (
    <div className='cartDropdown'>
      <div className='cartItems' />
      <CustomButton title='GO TO CHECKOUT' />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(CartDropdown);
