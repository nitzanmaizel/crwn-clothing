import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import './SignUp.scss';

const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = signUpForm;

  return (
    <div className='signUp'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form className='signUpForm' onSubmit={() => {}}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={() => {}}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={() => {}}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={() => {}}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={() => {}}
          label='Confirm Password'
          required
        />
        <CustomButton title='SIGN UP' type='submit' />
      </form>
    </div>
  );
};

export default SignUp;
