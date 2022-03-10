import React from 'react';

const CheckoutHeader = () => {
  return (
    <div className='checkoutHeader'>
      <div className='headerTab'>
        <span>Product</span>
      </div>
      <div className='headerTab'>
        <span>Description</span>
      </div>
      <div className='headerTab'>
        <span>Quantity</span>
      </div>
      <div className='headerTab'>
        <span>Price</span>
      </div>
      <div className='headerTab'>
        <span>Remove</span>
      </div>
    </div>
  );
};

export default CheckoutHeader;
