import { useState } from 'react';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase';

const DEFAULT_FORM = {
  email: '',
  password: '',
};

export const useSignInForm = () => {
  const [signInForm, setSignInForm] = useState(DEFAULT_FORM);
  const { email, password } = signInForm;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSignInForm({ ...signInForm, [name]: value });
  };

  const resetFormFields = () => setSignInForm(DEFAULT_FORM);

  const signInWithGoogle = async () => await signInWithGooglePopup();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password or Email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.error(error);
      }
    }
  };

  return {
    email,
    password,

    handleChange,
    signInWithGoogle,
    handleSubmit,
  };
};
