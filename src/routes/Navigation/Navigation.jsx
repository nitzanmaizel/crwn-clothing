import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import CartMenu from '../../components/CartMenu/CartMenu';

import { UserContext } from '../../context/UserContext';

import { signOutUser } from '../../utils/firebase/firebase';

import './Navigation.scss';

const Navigation = ({ hidden = true }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className='header'>
        <Link className='logoContainer' to='/'>
          <CrwnLogo className='logo' />
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
              <div className='link' onClick={signOutHandler}>
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
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
