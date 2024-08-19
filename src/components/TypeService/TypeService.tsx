import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '../../utils/constant';
import ButtonComponent from '../commons/Button';
import banner from '../../assets/images/banner.svg';
import { ArrowRightIcon } from '../../assets/icons';
import './styles.scss';

const TypeServiceComponent = () => {
  return (
    <div className="type__service-component">
      <div className="content">
        <div className="title">Nhà hàng</div>

        <div className="description">
          Mô hình nhà hàng sẽ là nơi sang trọng và những món ăn sẽ phụ thuộc vào
          phong...
        </div>

        <Link to={ROUTES_PATH.DEFAULT}>
          <ButtonComponent
            content="Trải nghiệm"
            size="32"
            type="secondary"
            iconPosition="right"
            Icon={<ArrowRightIcon />}
          />
        </Link>
      </div>

      <div className="images">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export { TypeServiceComponent };
