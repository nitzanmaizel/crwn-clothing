import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cartActions';

import './CheckoutItem.scss';

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <div className='checkoutItem'>
      <div className='imageContainer'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='removeButton' onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
