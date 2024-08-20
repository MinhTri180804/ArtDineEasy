import StoreComponent from '../../../components/Store';
import HeroSection from './partials/HeroSection';
import { TitleSection } from './partials/TitleSection/TitleSection';
import TypeServiceSection from './partials/TypeServiceSection';
import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Pagination, Navigation } from 'swiper/modules';

const HomePage = () => {
  return (
    <div className="home__page-container">
      <section className="hero__section">
        <HeroSection />
      </section>

      <section className="type__services__section section--margin">
        <TypeServiceSection />
      </section>

      <section className="store__hot-section  container">
        <TitleSection titleNormal="Các địa điểm" titleTarget="nổi bật" />
        <Swiper spaceBetween={24} slidesPerView={4} className="mySwiper">
          <SwiperSlide>
            <StoreComponent />
          </SwiperSlide>
          <SwiperSlide>
            <StoreComponent />
          </SwiperSlide>
          <SwiperSlide>
            <StoreComponent />
          </SwiperSlide>
          <SwiperSlide>
            <StoreComponent />
          </SwiperSlide>
          <SwiperSlide>
            <StoreComponent />
          </SwiperSlide>
          <SwiperSlide>
            <StoreComponent />
          </SwiperSlide>
          <SwiperSlide>
            <StoreComponent />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export { HomePage };
