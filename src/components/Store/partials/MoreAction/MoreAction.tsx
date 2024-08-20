import { MoreIcon } from '../../../../assets/icons';
import './styles.scss';

interface IMoreActionProps {
  // Props here
}

const MoreAction = ({}: IMoreActionProps) => {
  return (
    <div className="more__action">
      <div className="more__action-icon">
        <MoreIcon />
      </div>

      <div className="more__action-list">
        <div className="item">Yêu thích</div>
        <div className="item">Chia sẽ</div>
        <div className="item">Tố cáo</div>
      </div>
    </div>
  );
};
export { MoreAction };
