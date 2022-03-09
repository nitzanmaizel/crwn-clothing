import React from 'react';

import './CartItem.scss';

const CartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;

  return (
    <div className='cartItem'>
      <img src={imageUrl} alt={name} />
      <div className='itemDetails'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
