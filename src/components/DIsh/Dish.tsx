import './styles.scss';
import { banner } from '../../assets/images';
import { HeartIcon } from '../../assets/icons';
import StarAction from '../Store/partials/StarAction';

const DishComponent = () => {
  return (
    <div className="dish__component">
      <div className="dish__component-image">
        <img src={banner} alt="" />
      </div>
      <div className="dish__component-content">
        <div className="heading">
          <div className="name">Tên món ăn</div>
          <div className="statistic">
            <StarAction value="4.5" />
          </div>
        </div>

        <div className="body">
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            nostrum temporibus, quasi pariatur iusto corporis cum! Est
            perspiciatis, voluptatum voluptatem amet pariatur quia neque eius
            ut, nobis odio ipsum asperiores.
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer__price">
          <div className="value">250.000 VNĐ</div>
        </div>

        <div className="footer__actions">
          <div className="action__favorite">
            <HeartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export { DishComponent };
