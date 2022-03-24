import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartMenu.scss';

const CartMenu = ({ toggleCart, itemCount }) => {
  return (
    <div className='cartMenu' onClick={() => {}}>
      <ShoppingIcon className='shoppingIcon' />
      <span className='itemCount'>{itemCount}</span>
    </div>
  );
};

export default CartMenu;
