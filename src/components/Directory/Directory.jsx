import React from 'react';

import MenuItem from '../MenuItem/MenuItem';
import ListMenuItems from './ListMenuItems';

import './Directory.scss';

const Directory = () => {
  return (
    <div className='directoryContainer'>
      {ListMenuItems.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Directory;
