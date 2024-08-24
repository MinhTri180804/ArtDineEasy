import 'swiper/scss';
import useQueryTopicRestaurant from '../../../hooks/queries/useQueryTopicRestaurant';
import { FoodCategoriesSection } from './partials/FoodCategoriesSection/FoodCategoriesSection';
import HeroSection from './partials/HeroSection';
import StoreSwiperSection from './partials/StoreSwiperSection';
import TypeServiceSection from './partials/TypeServiceSection';
import './styles.scss';

const HomePage = () => {
  const { data, isLoading, error } = useQueryTopicRestaurant();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="home__page-container">
      <section className="hero__section">
        <HeroSection />
      </section>

      <section className="type__services__section section--margin">
        <TypeServiceSection />
      </section>

      {data?.result?.map((topic, index) => (
        <section
          key={index}
          className="store__swiper__section container section--margin"
        >
          <StoreSwiperSection
            title={topic.name}
            dataStores={topic.topicFoodStores}
          />
        </section>
      ))}

      <section className="food__categories-section container section--margin">
        <FoodCategoriesSection titleNormal="Các món ăn" />
      </section>
    </div>
  );
};

export { HomePage };
