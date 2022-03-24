import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import CartMenu from '../../components/CartMenu/CartMenu';

import { UserContext } from '../../context/UserContext';

import { signOutUser } from '../../utils/firebase/firebase';

import './Navigation.scss';

const Navigation = ({ hidden = true }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logoContainer' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='linksWrapper'>
          <Link className='navLink' to='/shop'>
            SHOP
          </Link>
          <Link className='navLink' to='/shop'>
            CONTACT
          </Link>
          {currentUser ? (
            <div className='userMenu'>
              <div className='navLink' onClick={signOutUser}>
                SIGN OUT
              </div>
              <div className='userName'>Welcome {currentUser.displayName}</div>
            </div>
          ) : (
            <Link className='navLink' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartMenu />
        </div>
        {!hidden && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
