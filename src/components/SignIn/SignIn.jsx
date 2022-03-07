import React, { useState } from 'react';

const SignIn = () => {
  const { signInForm, setSignInForm } = useState({ email: '', password: '' });
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={() => {}}>
        <input
          name='email'
          type='email'
          onChange={() => {}}
          value={signInForm.email}
          label='email'
          required
        />
        <input
          name='password'
          type='password'
          value={signInForm.password}
          onChange={() => {}}
          label='password'
          required
        />
        <button type='submit'> Sign in </button>
      </form>
    </div>
  );
};

export default SignIn;
