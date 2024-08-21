import './styless.scss';
import { TagIcon } from '../../assets/icons';

interface IDiscountTagComponentProps {
  // here props type
  textContent?: string;
  size?: 'small' | 'medium' | 'large';
  moreValue?: number;
}

const DiscountTagComponent = ({
  textContent = 'discount text default',
  size = 'small',
  moreValue,
}: IDiscountTagComponentProps) => {
  if (moreValue) {
    return (
      <div className="discount__tag-component">
        <div className="icon">
          <TagIcon />
        </div>

        <div className={`content more-value ${size}`}>+ {moreValue}</div>
      </div>
    );
  }

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
