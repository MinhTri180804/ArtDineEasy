import DishComponent from '../../../../../../../components/Dish';
import './styles.scss';

interface ISectionOfMenuComponentProps {
  // Props here
}

const SectionOfMenuComponent = ({}: ISectionOfMenuComponentProps) => {
  return (
    <div className="section__of-menu--component container">
      <div className="title">Tên danh mục món ăn</div>

      <div className="content">
        {Array.from({ length: 6 }).map((_, index) => (
          <DishComponent key={index} />
        ))}
      </div>
    </div>
  );
};

export { SectionOfMenuComponent };
