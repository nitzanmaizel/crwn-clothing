import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ title, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''}${isGoogleSignIn ? 'googleSignIn' : ''} customButton`}
    {...otherProps}>
    {title}
  </button>
);

export default CustomButton;
