import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import './SignIn.scss';

const SignIn = () => {
  const [signInForm, setSignInForm] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSignInForm({ ...signInForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSignInForm({ email: '', password: '' });
    console.log(signInForm, 'signInForm');
  };

  const { email, password } = signInForm;

  return (
    <div className='signIn'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          onChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <CustomButton title='Sign in' type='submit' />
      </form>
    </div>
  );
};

export default SignIn;
