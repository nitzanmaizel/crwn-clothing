import React from 'react';

import './CustomButton.scss';

const BUTTON_TYPE = {
  google: 'googleSignIn',
  inverted: 'inverted',
};

const CustomButton = ({ title, buttonType, ...otherProps }) => (
  <button className={`${BUTTON_TYPE[buttonType]} customButton`} {...otherProps}>
    {title}
  </button>
);

export default CustomButton;
