import DiscountTagComponent from '../../../components/DiscountTag';
import FeedbackAction from '../../../components/Store/partials/FeedbackAction';
import StarAction from '../../../components/Store/partials/StarAction';
import TagFoodCategory from '../../../components/TagFoodCategory';
import ButtonComponent from '../../../components/commons/Button';
import { banner } from '../../../assets/images/index';
import { StoreBannerSection } from './Partials/StoreBannerSection/StoreBannerSection';
import { useParams } from 'react-router-dom';
import AboutStoreSection from './Partials/InformationSection';

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
      <section className="breadcrumb__section">
        {/* TODO: implement breadcrumb component in here */}
      </section>

      <section className="store__details-banners">
        <StoreBannerSection banners={mock_banners} />
      </section>

      <section className="about__store-section">
        <AboutStoreSection />
      </section>

      <section className="menu__section">
        {/* TODO: implement menu of store in here */}
      </section>
    </>
  );
};

export { StoreDetailsPage };
