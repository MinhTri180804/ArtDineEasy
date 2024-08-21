import FeedbackAction from './partials/FeedbackAction';
import MoreAction from './partials/MoreAction';
import StarAction from './partials/StarAction';
import './styles.scss';
import banner from '../../assets/images/banner.svg';
import TagFoodCategory from '../TagFoodCategory';
import DiscountTagComponent from '../DiscountTag';

const storeMock = {
  image: banner,
  name: 'Store name',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptas ipsam non veritatis. Sapiente quibusdam ratione optio minima aut dignissimos dicta fugiat, voluptatum deserunt. Incidunt culpa iure a explicabo. Voluptas.',
  foodTags: ['Pizza', 'Burger', 'Pasta', 'Sushi'],
  like: 100,
  feedback: 50,
  discount: 'Giam 10%',
};

interface IStoreComponentProps {
  // Props here
}

const StoreComponent = ({}: IStoreComponentProps) => {
  return (
    <div className="store__component">
      <div className="store__image">
        <img src={storeMock.image} alt="" />
      </div>
      <div className="store__food-tags">
        {storeMock.foodTags.slice(1).map((tag, index) => (
          <TagFoodCategory key={index} content={tag} />
        ))}
        <TagFoodCategory plus={3} content={storeMock.foodTags[0]} />
      </div>
      <div className="store__name">
        <h2>{storeMock.name}</h2>
      </div>
      <div className="store__description">
        <p>{storeMock.description}</p>
      </div>
      <div className="store__discounts">
        <DiscountTagComponent textContent={storeMock.discount} size="medium" />
        <DiscountTagComponent moreValue={4} size="medium" />
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
