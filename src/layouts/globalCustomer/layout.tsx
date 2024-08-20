import { Outlet } from 'react-router-dom';
import './styles.scss';
import HeaderComponent from './partials/Header';
import FooterComponent from './partials/Footer';

const GlobalCustomerLayout = () => {
  return (
    <>
      <HeaderComponent />

      <main>
        <Outlet />
      </main>

      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export { GlobalCustomerLayout };
