import 'swiper/scss';
import HeroSection from './partials/HeroSection';
import StoreSwiperSection from './partials/StoreSwiperSection';
import TypeServiceSection from './partials/TypeServiceSection';
import './styles.scss';
import { FoodCategoriesSection } from './partials/FoodCategoriesSection/FoodCategoriesSection';

const HomePage = () => {
  return (
    <div className="home__page-container">
      <section className="hero__section">
        <HeroSection />
      </section>

      <section className="type__services__section section--margin">
        <TypeServiceSection />
      </section>

      <section className="store__hot-section  container section--margin">
        <StoreSwiperSection
          propsOfTitleSection={{
            titleNormal: 'Các địa diểm',
            titleTarget: 'Nổi bật',
          }}
        />
      </section>

      <section className="store__discount-section container section--margin">
        <StoreSwiperSection
          propsOfTitleSection={{
            titleNormal: 'Các địa điểm có',
            titleTarget: 'Ưu đãi',
          }}
        />
      </section>

      <section className="food__categories-section container section--margin">
        <FoodCategoriesSection titleNormal="Các món ăn" />
      </section>
    </div>
  );
};

export { HomePage };
