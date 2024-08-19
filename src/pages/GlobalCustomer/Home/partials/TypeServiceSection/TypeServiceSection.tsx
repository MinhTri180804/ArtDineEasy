import TypeServiceComponent from '../../../../../components/TypeService';
import './style.scss';

const TypeServiceSection = () => {
  return (
    <div className="type__service-content">
      <div className="type__service-container container">
        <div className="title">
          Các mô hình <span>dịch vụ</span>
        </div>

        <div className="content">
          <TypeServiceComponent />
          <TypeServiceComponent />
        </div>
      </div>
    </div>
  );
};

export { TypeServiceSection };
