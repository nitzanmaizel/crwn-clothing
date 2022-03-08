import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ title, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'googleSignIn' : ''} customButton`} {...otherProps}>
    {title}
  </button>
);

export default CustomButton;
