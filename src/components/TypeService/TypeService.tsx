import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../../assets/icons';
import { ICategoryOfStore } from '../../types/response/CategoryOfStore/categoryOfStoreType';
import { ROUTES_PATH } from '../../utils/constant';
import ButtonComponent from '../commons/Button';
import './styles.scss';

interface ITypeServiceComponentProps {
  categoryOfService: ICategoryOfStore;
}

const TypeServiceComponent = ({
  categoryOfService,
}: ITypeServiceComponentProps) => {
  const { name, description, imageDTOReponese } = categoryOfService;

  if (!categoryOfService) {
    return null;
  }

  return (
    <div className="type__service-component">
      <div className="content">
        <div className="title">{name}</div>

        <div className="description">{description}</div>

        <Link to={ROUTES_PATH.DEFAULT}>
          <ButtonComponent
            content="Trải nghiệm"
            size="32"
            type="secondary"
            iconPosition="right"
            Icon={<ArrowRightIcon />}
          />
        </Link>
      </div>

      <div className="images">
        <img src={imageDTOReponese.url} alt="" />
      </div>
    </div>
  );
};

export { TypeServiceComponent };
