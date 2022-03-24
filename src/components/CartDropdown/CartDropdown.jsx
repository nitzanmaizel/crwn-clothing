import React from 'react';
import { useNavigate } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';
import withRouter from '../ComponentWithRouther/ComponentWithRouther';
import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems = [] }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/checkout');
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

export default withRouter(CartDropdown);
