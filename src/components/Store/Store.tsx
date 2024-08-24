import { ITopicFoodStore } from '../../types/response/Topic/topicType';
import DiscountTagComponent from '../DiscountTag';
import TagFoodCategory from '../TagFoodCategory';
import FeedbackAction from './partials/FeedbackAction';
import MoreAction from './partials/MoreAction';
import StarAction from './partials/StarAction';
import './styles.scss';

interface IStoreComponentProps {
  store: ITopicFoodStore;
}

const mockTags = ['Cơm', 'Phở', 'Bún', 'Bánh xèo'];

const mockDiscount = [
  'Giảm giá 10%',
  'Giảm giá 20%',
  'Giảm giá 30%',
  'Giảm giá 40%',
  'Giảm giá 50%',
];

const StoreComponent = ({ store }: IStoreComponentProps) => {
  const { imageDTOReponese, name, description } = store;
  return (
    <div className="store__component">
      <div className="store__image">
        <img src={imageDTOReponese.url} alt="" />
      </div>
      <div className="store__food-tags">
        {mockTags.slice(1).map((tag, index) => (
          <TagFoodCategory key={index} content={tag} />
        ))}
        <TagFoodCategory plus={3} />
      </div>
      <div className="store__name">
        <h2>{name}</h2>
      </div>
      <div className="store__description">
        <p>{description}</p>
      </div>
      <div className="store__discounts">
        <DiscountTagComponent
          key={'discount-1'}
          textContent={mockDiscount[0]}
        />

        <DiscountTagComponent moreValue={mockDiscount.length - 1} />
      </div>
      <div className="store__actions">
        <div className="store__actions-group">
          <StarAction value="4.5" />
          <FeedbackAction value={120} />
        </div>

        <MoreAction />
      </div>
    </div>
  );
};

export { StoreComponent };
