import ButtonComponent from '../../../components/commons/Button';
import { ArrowDownIcon } from '../../../assets/icons';

const HomePage = () => {
  return (
    <div className="container__page">
      <div className="container__page-title">This is Home page</div>
      <ButtonComponent
        content="Xem them"
        type="secondary"
        iconPosition="left"
        size="40"
        Icon={<ArrowDownIcon />}
      />
    </div>
  );
};

export { HomePage };
