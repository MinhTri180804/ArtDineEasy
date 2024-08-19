import ButtonComponent from '../../../components/commons/Button';
import Dropdown from '../../../components/commons/Dropdown';
import flagVN from '../../../assets/images/FlagVN.svg';
import { ArrowDownIcon } from '../../../assets/icons';

const HomePage = () => {
  return (
    <div className="container__page">
      <div className="container__page-title">This is Home page</div>
      <ButtonComponent />
      <Dropdown title="testing" imageRight={flagVN} IconLeft={ArrowDownIcon} />
    </div>
  );
};

export { HomePage };
