import React from 'react';

import CheckoutHeader from './CheckoutHeader';

import './CheckOutPage.scss';

const CheckOutPage = () => {
  return (
    <div className='checkoutPage'>
      <CheckoutHeader />
      <div className='total'>TOTAL: $0</div>
    </div>
  );
};

export default CheckOutPage;
