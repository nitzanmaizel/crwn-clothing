import React from 'react';

import CustomButton from '../CustomButton/CustomButton';

import './CollectionItem.scss';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const addItem = (item) => {
    console.log(item);
  };
  return (
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
      <CustomButton onClick={() => addItem(item)} inverted title='Add to cart' />
    </div>
  );
};

export default CollectionItem;
