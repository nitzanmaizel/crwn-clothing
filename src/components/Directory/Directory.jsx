import React, { useState, useEffect } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import ListMenuItems from './ListMenuItems';

import './Directory.scss';

const Directory = () => {
  const [section, setSection] = useState([]);

  useEffect(() => {
    setSection(ListMenuItems);
  }, []);

  return (
    <div className='directory-menu'>
      {section.length &&
        section.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
    </div>
  );
};

export default Directory;
