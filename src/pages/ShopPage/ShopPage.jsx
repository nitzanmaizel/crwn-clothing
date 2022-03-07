import React, { useState, useEffect } from 'react';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import ShopData from './ShopData';

const ShopPage = () => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    setShopData(ShopData);
  }, []);

  return (
    <div className='shop-page'>
      {shopData.length &&
        shopData.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  );
};

export default ShopPage;
