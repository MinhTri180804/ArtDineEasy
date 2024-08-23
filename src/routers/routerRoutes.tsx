import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/GlobalCustomer/Home';
import useScrollRestore from '../hooks/useScrollRestore';
import { ROUTES_PATH } from '../utils/constant';
import GlobalCustomerLayout from '../layouts/globalCustomer';
import StoreDetailsPage from '../pages/GlobalCustomer/StoreDetails';

const RouterRoutes = () => {
  useScrollRestore();

  return (
    <Routes>
      <Route path={ROUTES_PATH.DEFAULT} element={<GlobalCustomerLayout />}>
        <Route path={ROUTES_PATH.DEFAULT} element={<HomePage />} />
        <Route path={ROUTES_PATH.STORE_DETAIL} element={<StoreDetailsPage />} />
      </Route>

      {/* <Route path='/host' element={}/> */}
    </Routes>
  );
};

export default RouterRoutes;
