import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <div>
      <Route exact path={'/'} component={HomePage} />
    </div>
  );
};

export default App;
