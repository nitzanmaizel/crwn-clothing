import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase';

import './Header.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logoContainer' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='headerLinks'>
      <Link className='link' to='/shop'>
        SHOP
      </Link>
      <Link className='link' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='link' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='link' to='/auth'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
