import React from 'react';

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

export default CartDropdown;
