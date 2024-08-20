import banner from '../../assets/images/banner.svg';
import './styles.scss';

interface IFoodCategoryComponentProps {
  name: string;
}

const FoodCategoryComponent = ({ name }: IFoodCategoryComponentProps) => {
  return (
    <div className="food__category-component">
      <div className="image__food">
        <img src={banner} alt="" />
      </div>
      <h5 className="name__food">{name}</h5>
    </div>
  );
};

export { FoodCategoryComponent };
