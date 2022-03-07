import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route path={'/shop'} component={ShopPage} />
        <Route path={'/auth'} component={AuthPage} />
      </Switch>
    </div>
  );
};

export default App;
