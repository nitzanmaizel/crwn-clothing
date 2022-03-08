import React, { useState } from 'react';

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
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input
          name='email'
          type='email'
          onChange={handleChange}
          value={email}
          label='email'
          required
        />
        <input
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          label='password'
          required
        />
        <button type='submit'> Sign in </button>
      </form>
    </div>
  );
};

export default SignIn;
