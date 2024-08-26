import 'swiper/scss';
import { FoodCategoriesSection } from './partials/FoodCategoriesSection/FoodCategoriesSection';
import HeroSection from './partials/HeroSection';
import TopicStoreSection from './partials/TopicStoreSection';
import TypeServiceSection from './partials/TypeServiceSection';
import './styles.scss';

const HomePage = () => {
  return (
    <div className="home__page-container">
      <section className="hero__section">
        <HeroSection />
      </section>

      <section className="type__services__section section--margin">
        <TypeServiceSection />
      </section>

    <TopicStoreSection />

      <section className="food__categories-section container section--margin">
        <FoodCategoriesSection titleNormal="Các món ăn" />
      </section>
    </div>
  );
};

export { HomePage };
