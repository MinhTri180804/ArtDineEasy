import { useNavigate, useParams } from 'react-router-dom';
import SpinnerLoading from '../../../components/commons/SpinnerLoading';
import useQueryStore from '../../../hooks/queries/useQueryStore';
import AboutStoreSection from './Partials/InformationSection';
import MenuSection from './Partials/MenuSection';
import { StoreBannerSection } from './Partials/StoreBannerSection/StoreBannerSection';
import './styles.scss';

const StoreDetailsPage = () => {
  const { storeId } = useParams<Record<string, string>>();
  const navigate = useNavigate();

  // TODO: refactor validate storeId in here
  if (!storeId) {
    navigate('/404');
    return;
  }

  const { data, isLoading, error } = useQueryStore(storeId ?? '');

  if (isLoading) {
    return (
      <div className="store__details-loading">
        <SpinnerLoading />
      </div>
    );
  }

  if (error) {
    navigate('/404');
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="store__details-page--container">
        <section className="breadcrumb__section container">
          {/* TODO: implement breadcrumb component in here */}
        </section>

        <section className="store__details-banners">
          <StoreBannerSection banners={data?.result?.imageDTOReponeseList} />
        </section>

        <section className="about__store-section container">
          <AboutStoreSection
            attributesTable={data?.result?.attributeResponeseList}
            name={data?.result?.name}
            description={data?.result?.description}
          />
        </section>

        <section className="menu__section">
          <MenuSection idStore={storeId} />
        </section>
      </div>
    </>
  );
};

export { StoreDetailsPage };
