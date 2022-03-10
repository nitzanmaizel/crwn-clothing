import React from 'react';

import './CheckOutPage.scss';

const CheckOutPage = () => {
  return (
    <div className='checkoutPage'>
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
      <div className='total'>TOTAL: $0</div>
    </div>
  );
};

export default CheckOutPage;
