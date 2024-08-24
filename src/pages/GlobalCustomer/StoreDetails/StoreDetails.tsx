import { useNavigate, useParams } from 'react-router-dom';
import { banner } from '../../../assets/images/index';
import AboutStoreSection from './Partials/InformationSection';
import { StoreBannerSection } from './Partials/StoreBannerSection/StoreBannerSection';
import './styles.scss';
import useQueryStore from '../../../hooks/queries/useQueryStore';

const mock_banners = [
  {
    id: 1,
    image: banner,
  },
  {
    id: 2,
    image: banner,
  },
  {
    id: 3,
    image: banner,
  },
];

const StoreDetailsPage = () => {
  const { storeId } = useParams<Record<string, string>>();
  const navigate = useNavigate();

  // TODO: refactor validate storeId in here
  if (!storeId) {
    navigate('/404');
  }

  const { data, isLoading, error } = useQueryStore(storeId ?? '');
  console.log(data);

  if (isLoading) {
    // TODO: implement loading component in here
    return <div>Loading...</div>;
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
          {/* TODO: implement menu of store in here */}
        </section>
      </div>
    </>
  );
};

export { StoreDetailsPage };
