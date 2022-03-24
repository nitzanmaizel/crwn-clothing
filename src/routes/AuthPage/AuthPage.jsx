import React from 'react';
import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import './AuthPage.scss';

const AuthPage = () => {
  return (
    <div className='authContainer'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default AuthPage;
