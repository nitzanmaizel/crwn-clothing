import React from 'react';

const CustomButton = ({ title, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {title}
  </button>
);

export default CustomButton;
