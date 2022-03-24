import { Routes, Route } from 'react-router-dom';

import HomePage from './routes/Home/HomePage';
import Navigation from './routes/Navigation/Navigation';
import AuthPage from './routes/AuthPage/AuthPage';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default App;
