import React, { useState, useEffect } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import ListMenuItems from '../../redux/directory/directoryState';

import './Directory.scss';

const Directory = () => {
  const [section, setSection] = useState([]);

  useEffect(() => {
    setSection(ListMenuItems);
  }, []);

  return (
    <div className='directory-menu'>
      {section.length &&
        section.map(({ id, ...OtherSectionProps }) => <MenuItem key={id} {...OtherSectionProps} />)}
    </div>
  );
};

export default Directory;
