import React from 'react';

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  \
  return (
    <div className='checkoutItem'>
      <div className='imageContainer'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='removeButton'>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
