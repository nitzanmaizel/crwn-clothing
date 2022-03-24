import { useState } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

const DEFAULT_FORM = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const ERRORS = {
  pswDontMatch: "Passwords Don't Match",
  emailInUse: 'Cannot Create User, Email Already In Use',
};

export const useSignUpForm = () => {
  const [signUpForm, setSignUpForm] = useState(DEFAULT_FORM);
  const [errors, setErrors] = useState('');

  const { displayName, email, password, confirmPassword } = signUpForm;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  const resetFormFields = () => setSignUpForm(DEFAULT_FORM);

  const resetErrors = () =>
    setTimeout(() => {
      setErrors('');
    }, 3000);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrors(ERRORS.pswDontMatch);
      resetErrors();
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  return {
    signUpForm,
    errors,

    handleChange,
    handleSubmit,
  };
};
