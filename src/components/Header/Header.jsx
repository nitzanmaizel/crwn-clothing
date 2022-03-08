import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';

const Header = () => (
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
    </div>
  </div>
);

export default Header;