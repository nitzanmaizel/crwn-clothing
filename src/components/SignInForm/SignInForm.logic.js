import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase';

const DEFAULT_FORM = {
  email: '',
  password: '',
};

export const useSignInForm = () => {
  const { setCurrentUser } = useContext(UserContext);

  const [signInForm, setSignInForm] = useState(DEFAULT_FORM);
  const { email, password } = signInForm;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSignInForm({ ...signInForm, [name]: value });
  };

  const resetFormFields = () => setSignInForm(DEFAULT_FORM);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password or email');
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
