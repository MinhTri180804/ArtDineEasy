import { StarIcon } from '../../../../assets/icons';
import './styles.scss';

interface IStarActionProps {
  value?: string;
}

const StarAction = ({ value = '4.5' }: IStarActionProps) => {
  return (
    <div className="star__action">
      <div className="star__action-icon">
        <StarIcon />
      </div>

      <div className="star__action-value">{value}</div>
    </div>
  );
};

export { StarAction };
