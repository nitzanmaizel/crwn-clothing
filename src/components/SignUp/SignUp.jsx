import React, { useState } from 'react';

import './SignUp.scss';

const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return <div>SignUp</div>;
};

export default SignUp;
