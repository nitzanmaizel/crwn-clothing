import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../redux/cart/cartActions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartMenu.scss';

const CartMenu = ({ toggleCart }) => {
  return (
    <div className='cartMenu' onClick={toggleCart}>
      <ShoppingIcon className='shoppingIcon' />
      <span className='itemCount'>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(CartMenu);
