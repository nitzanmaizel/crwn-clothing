import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleCart } from '../../redux/cart/cartActions';

import { selectCartItems } from '../../redux/cart/cartSelectors';

import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleOnClick = () => {
    history.push('/checkout');
    dispatch(toggleCart());
  };

  return (
    <div className='cartDropdown'>
      <div className='cartItems'>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <div className='emptyMessage'>Your cart is empty</div>
        )}
      </div>
      <CustomButton title='GO TO CHECKOUT' onClick={handleOnClick} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
