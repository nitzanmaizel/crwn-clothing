import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';

import CartMenu from '../CartMenu/CartMenu';
import CartDropdown from '../CartDropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';

const Header = ({ currentUser, hidden }) => (
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
          <div className='link' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
          <div className='userName'>Welcome {currentUser.displayName}</div>
        </div>
      ) : (
        <Link className='link' to='/auth'>
          SIGN IN
        </Link>
      )}
      <CartMenu />
    </div>
    {!hidden && <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
