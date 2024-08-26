import './styles.scss';
import TypeServiceSkeleton from '../TypeService';

interface IMockLoadingProps {
  countProduct: number;
}

const MockLoading = ({ countProduct = 2 }: IMockLoadingProps) => {
  return (
    <div className="type__service-content--loading container">
      <div className="title"></div>

      <div className="content">
        {Array.from({ length: countProduct }).map((_, index) => (
          <TypeServiceSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default MockLoading;
