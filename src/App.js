import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase';
import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route path={'/shop'} component={ShopPage} />
        <Route exact path={'/checkout'} component={CheckoutPage} />
        <Route
          exact
          path={'/auth'}
          render={() => (currentUser ? <Redirect to='/' /> : <AuthPage />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
