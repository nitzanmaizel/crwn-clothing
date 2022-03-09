import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

import './CollectionItem.scss';

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className='collectionItem'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>${price}</span>
    </div>
    <CustomButton inverted title='Add to cart' />
  </div>
);

export default CollectionItem;
