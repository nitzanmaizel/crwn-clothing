import React from 'react';

import './FormInput.scss';

const FormInput = ({ label, value, error = '', handleChange, ...otherProps }) => (
  <div className='inputWrapper'>
    <input
      className={`${error.length ? 'errorFormInput' : ''} formInput`}
      onChange={handleChange}
      value={value}
      {...otherProps}
    />
    {label && <label className={`${value.length ? 'shrink' : ''} formInputLabel`}>{label}</label>}
    {error && <span className='errorMsg'>{error}</span>}
  </div>
);

export default FormInput;
