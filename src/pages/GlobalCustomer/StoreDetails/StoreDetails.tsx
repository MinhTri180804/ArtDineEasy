import { useParams } from 'react-router-dom';
import { banner } from '../../../assets/images/index';
import AboutStoreSection from './Partials/InformationSection';
import { StoreBannerSection } from './Partials/StoreBannerSection/StoreBannerSection';
import './styles.scss';

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
  console.log(storeId);
  return (
    <>
      <div className="store__details-page--container">
        <section className="breadcrumb__section container">
          {/* TODO: implement breadcrumb component in here */}
        </section>

        <section className="store__details-banners">
          <StoreBannerSection banners={mock_banners} />
        </section>

        <section className="about__store-section container">
          <AboutStoreSection />
        </section>

        <section className="menu__section">
          {/* TODO: implement menu of store in here */}
        </section>
      </div>
    </>
  );
};

export { StoreDetailsPage };
