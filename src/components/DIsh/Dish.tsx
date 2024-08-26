import { HeartIcon } from '../../assets/icons';
import { IDishType } from '../../types/response/Dish/dishType';
import formatCurrencyVND from '../../utils/formatCurrencyVND';
import StarAction from '../Store/partials/StarAction';
import './styles.scss';

interface IDishComponentProps {
  dishData: IDishType;
}

const DishComponent = ({ dishData }: IDishComponentProps) => {
  const { description, price, productName, images } = dishData;
  return (
    <div className="dish__component">
      <div className="dish__component-image">
        <img src={images[0].url} alt="" />
      </div>
      <div className="dish__component-content">
        <div className="heading">
          <div className="name">{productName}</div>
          <div className="statistic">
            <StarAction value="4.5" />
          </div>
        </div>

        <div className="body">
          <div className="description">{description}</div>
        </div>

        <div className="footer">
          <div className="footer__price">
            <div className="value">{formatCurrencyVND(price)} VNĐ</div>
          </div>

          <div className="footer__actions">
            <div className="action__favorite">
              <HeartIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DishComponent };
