import TypeServiceComponent from '../../../../../components/TypeService';
import { TitleSection } from '../TitleSection/TitleSection';
import './style.scss';

const TypeServiceSection = () => {
  return (
    <div className="type__service-content">
      <div className="type__service-container container">
        <TitleSection titleNormal="Các mô hình" titleTarget="dịch vụ" />

        <div className="content">
          <TypeServiceComponent />
          <TypeServiceComponent />
        </div>
      </div>
    </div>
  );
};

export { TypeServiceSection };
