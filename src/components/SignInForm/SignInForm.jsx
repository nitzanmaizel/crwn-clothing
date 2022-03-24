import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { useSignInForm } from './SignInForm.logic';

import './SignInForm.scss';

const SignInForm = () => {
  const { email, password, handleChange, signInWithGoogle, handleSubmit } = useSignInForm();

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
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <div className='buttonWrapper'>
          <CustomButton title='Sign in' type='submit' />
          <CustomButton
            onClick={signInWithGoogle}
            buttonType='google'
            title='Sign in with Google'
            type='button'
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
