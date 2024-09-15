import { Dashboard } from '../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return <>
  <BrowserRouter>
    <Routes>
      <Route  element={<Dashboard/>} path='/' />
    </Routes>
  </BrowserRouter>
  </>
};

export default Router;
