import ButtonComponent from '../../../components/commons/Button';
import Dropdown from '../../../components/commons/Dropdown';

const HomePage = () => {
  return (
    <div className="container__page">
      <div className="container__page-title">This is Home page</div>
      <ButtonComponent />
      <Dropdown title="testing" />
    </div>
  );
};

export { HomePage };
