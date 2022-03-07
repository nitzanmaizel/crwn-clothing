import React, { useState, useEffect } from 'react';
import ShopData from './ShopData';

const ShopPage = () => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    setShopData(ShopData);
  }, []);

  return <div>ShopPage</div>;
};

export default ShopPage;
