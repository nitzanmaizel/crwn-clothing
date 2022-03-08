import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ title, ...otherProps }) => (
  <button className='customButton' {...otherProps}>
    {title}
  </button>
);

export default CustomButton;
