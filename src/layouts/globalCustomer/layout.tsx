import { Outlet } from 'react-router-dom';
import './styles.scss';

const GlobalCustomerLayout = () => {
  return (
    <>
      <header>This is header</header>

      <main>
        <Outlet />
      </main>

      <footer>This is footer</footer>
    </>
  );
};

export { GlobalCustomerLayout };
