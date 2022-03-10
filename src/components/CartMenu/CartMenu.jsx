import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCart } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartMenu.scss';

const CartMenu = ({ toggleCart, itemCount }) => {
  return (
    <div className='cartMenu' onClick={toggleCart}>
      <ShoppingIcon className='shoppingIcon' />
      <span className='itemCount'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartMenu);
