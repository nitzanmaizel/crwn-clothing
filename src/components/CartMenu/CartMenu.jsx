import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartMenu.scss';

const CartMenu = () => {
  return (
    <div className='cartMenu'>
      <ShoppingIcon className='shoppingIcon' />
      <span className='itemCount'>0</span>
    </div>
  );
};

export default CartMenu;