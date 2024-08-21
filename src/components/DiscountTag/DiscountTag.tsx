import './styless.scss';
import { TagIcon } from '../../assets/icons';

interface IDiscountTagComponentProps {
  // here props type
  textContent: string;
  size?: 'small' | 'medium' | 'large';
}

const DiscountTagComponent = ({
  textContent,
  size = 'small',
}: IDiscountTagComponentProps) => {
  return (
    <div className="discount__tag-component">
      <div className="icon">
        <TagIcon />
      </div>

      <div className={`content ${size}`}>{textContent}</div>
    </div>
  );
};

export { DiscountTagComponent };
