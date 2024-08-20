import { FeedbackIcon } from '../../../../assets/icons';
import './styles.scss';

interface IFeedbackActionProps {
  value: string | number;
}

const FeedbackAction = ({ value }: IFeedbackActionProps) => {
  return (
    <div className="feedback__action">
      <div className="feedback__action-icon">
        <FeedbackIcon />
      </div>

      <div className="feedback__action-value">{value}</div>
    </div>
  );
};

export { FeedbackAction };
