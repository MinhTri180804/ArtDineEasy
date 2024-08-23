import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.scss';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';

interface IStoreBannerSectionProps {
  // This is mock interface for banners filed in StoreBannerSection component
  banners: {
    id: number;
    image: string;
  }[];
}

const DELAY_TIME = 1000;

const StoreBannerSection = ({ banners }: IStoreBannerSectionProps) => {
  return (
    <div className="store__banners-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: DELAY_TIME,
        }}
        slidesPerView={1}
        pagination
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img src={banner.image} alt="banner" className="banner__image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { StoreBannerSection };
