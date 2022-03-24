import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, match, linkUrl }) => (
  <div className={`${size} menu-item`} onClick={() => {}}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
