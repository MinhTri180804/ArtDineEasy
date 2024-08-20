import { Link } from 'react-router-dom';
import { FoodCategoryComponent } from '../../../../../components/FoodCategory/FoodCategory';
import TitleSection from '../TitleSection';
import './styles.scss';
import ButtonComponent from '../../../../../components/commons/Button';
import { ArrowRightIcon } from '../../../../../assets/icons';

interface IFoodCategoriesSectionProps {
  titleNormal?: string;
  titleTarget?: string;
}

const foodCategoriesMock = [
  {
    id: 1,
    name: 'Pizza',
  },
  {
    id: 2,
    name: 'Burger',
  },
  {
    id: 3,
    name: 'Pasta',
  },
  {
    id: 4,
    name: 'Salad',
  },
  {
    id: 5,
    name: 'Dessert',
  },
  {
    id: 6,
    name: 'Drink',
  },

  {
    id: 7,
    name: 'Pizza',
  },
  {
    id: 8,
    name: 'Burger',
  },
  {
    id: 9,
    name: 'Pasta',
  },
  {
    id: 10,
    name: 'Salad',
  },
  {
    id: 11,
    name: 'Dessert',
  },
];

const FoodCategoriesSection = ({
  titleNormal = 'No title',
  titleTarget,
}: IFoodCategoriesSectionProps) => {
  return (
    <div className="food__categories-container">
      <TitleSection titleNormal={titleNormal} titleTarget={titleTarget} />

      <div className="food__categories-content">
        {foodCategoriesMock.map((foodCategory) => (
          <FoodCategoryComponent
            key={foodCategory.id}
            name={foodCategory.name}
          />
        ))}

        <div className="view__more">
          <Link to="/food-categories">
            <ButtonComponent
              content="Xem thêm"
              type="secondary"
              Icon={<ArrowRightIcon />}
              iconPosition="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { FoodCategoriesSection };
