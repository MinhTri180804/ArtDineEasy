import TitleSection from '../TitleSection';
import './styles.scss';

interface IFoodCategoriesSectionProps {
  title: string;
}

const FoodCategoriesSection = ({ title }: IFoodCategoriesSectionProps) => {
  return (
    <div>
      <TitleSection titleNormal={title} />
    </div>
  );
};

export { FoodCategoriesSection };
