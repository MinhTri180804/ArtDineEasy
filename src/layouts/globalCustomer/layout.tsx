import { Outlet } from 'react-router-dom';
import './styles.scss';
import HeaderComponent from './partials/Header';

const GlobalCustomerLayout = () => {
  return (
    <>
      <HeaderComponent />

      <main>
        <Outlet />
      </main>

      <footer>This is footer</footer>
    </>
  );
};

export { GlobalCustomerLayout };
