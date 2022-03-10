import React, { useState } from 'react';

import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import { auth, signInWithGoogle } from '../../firebase/firebase';

import './SignIn.scss';

const SignIn = () => {
  const [signInForm, setSignInForm] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSignInForm({ ...signInForm, [name]: value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await auth.signInWithEmailAndPassword(email, password);
      setSignInForm({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
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
        <div className='buttonWrapper'>
          <CustomButton title='Sign in' type='submit' />
          <CustomButton
            type='button'
            onClick={signInWithGoogle}
            isGoogleSignIn
            title='Sign in with Google'
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
