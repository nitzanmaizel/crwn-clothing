import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
        <div className='userMenu'>
          <div className='userName'>Welcome {currentUser.displayName}</div>
          <div className='link' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        </div>
      ) : (
        <Link className='link' to='/auth'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(Header);
