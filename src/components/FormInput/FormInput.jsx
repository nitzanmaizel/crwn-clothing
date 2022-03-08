import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, value, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label && <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
  </div>
);

export default FormInput;
