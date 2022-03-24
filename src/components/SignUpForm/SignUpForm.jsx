import React from 'react';

import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import { useSignUpForm } from './SignUpForm.logic';

import './SignUpForm.scss';

const SignUpForm = () => {
  const { signUpForm, errors, handleChange, handleSubmit } = useSignUpForm();

  const { displayName, email, password, confirmPassword } = signUpForm;

  return (
    <div className='signUp'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form className='signUpForm' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password (Minimum 6 character)'
          error={errors}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          error={errors}
          required
        />
        <CustomButton title='SIGN UP' type='submit' />
      </form>
    </div>
  );
};

export default SignUpForm;
