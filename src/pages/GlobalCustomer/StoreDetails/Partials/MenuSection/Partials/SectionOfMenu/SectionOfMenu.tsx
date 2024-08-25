import { useRef } from 'react';
import DishComponent from '../../../../../../../components/Dish';
import { IDishType } from '../../../../../../../types/response/Dish/dishType';
import './styles.scss';

interface ISectionOfMenuComponentProps {
  sectionOfMenuData: IDishType[];
  sectionName: string;
  sectionId: number | string;
}

const SectionOfMenuComponent = ({
  sectionOfMenuData,
  sectionName,
  sectionId,
}: ISectionOfMenuComponentProps) => {
  return (
    <div className="section__of-menu--component ">
      <div className="title">{sectionName}</div>

      <div className="content">
        {sectionOfMenuData.map((dish, index) => (
          <DishComponent key={index} dishData={dish} />
        ))}
      </div>
    </div>
  );
};

export { SectionOfMenuComponent };
