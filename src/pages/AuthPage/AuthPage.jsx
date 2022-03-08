import React from 'react';
import SignIn from '../../components/SignIn/SignIn';

import './AuthPage.scss';

const AuthPage = () => {
  return (
    <div className='authContainer'>
      <SignIn />
    </div>
  );
};

export default AuthPage;
