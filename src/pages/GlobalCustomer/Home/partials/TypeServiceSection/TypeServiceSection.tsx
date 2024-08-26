import TypeServiceComponent from '../../../../../components/TypeService';
import TypeServiceSkeleton from '../../../../../components/skeletons/TypeService';
import useQueryCategoryOfStore from '../../../../../hooks/queries/useQueryCategoryOfStore';
import { TitleSection } from '../TitleSection/TitleSection';
import './style.scss';

const TypeServiceSection = () => {
  const { data, error, isLoading } = useQueryCategoryOfStore();

  if (isLoading) {
    return (
      <div className="type__service-content--loading container">
        <div className="title"></div>

        <div className="content">
          <TypeServiceSkeleton />
          <TypeServiceSkeleton />
          <TypeServiceSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    console.log(error);
    return <div></div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="type__service-content">
      <div className="type__service-container container">
        <TitleSection titleNormal="Các mô hình" titleTarget="dịch vụ" />

        <div className="content">
          {data?.result?.map((category, index) => (
            <TypeServiceComponent key={index} categoryOfService={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { TypeServiceSection };
