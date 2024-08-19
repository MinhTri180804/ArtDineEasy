import ButtonComponent from '../../../../../components/commons/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import banner from '../../../../../assets/images/banner.svg';
import banner2 from '../../../../../assets/images/banner-2.svg';
import banner3 from '../../../../../assets/images/banner-3.svg';
import { ArrowRightIcon } from '../../../../../assets/icons';
import './styles.scss';
import { Link } from 'react-router-dom';

const bannersMock = [
  {
    id: 1,
    url: banner,
  },
  {
    id: 2,
    url: banner2,
  },
  {
    id: 3,
    url: banner3,
  },
];

const HeroSection = () => {
  return (
    <div className="hero__section-content">
      <div className="container hero__section-container">
        <div className="hero__section-content">
          <div className="title">ArtDineEase</div>

          <div className="description">
            Nếu bạn đang tìm kiếm 1 nơi cung cấp dịch vụ ăn uống, ẩm thực thì
            chúng tôi chính là cầu nối, nơi bạn có thể dựa vào những đánh giá từ
            khách hàng đã trải nghiệm và những lời giới thiệu của chính chủ cửa
            hàng
          </div>

          <Link to="/" className="hero__section-button">
            <ButtonComponent
              content="Trải nghiệm ngay"
              Icon={<ArrowRightIcon />}
              iconPosition="right"
            />
          </Link>
        </div>
        <div className="hero__section-slides">
          <Swiper
            pagination={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {bannersMock.map((banner, index) => (
              <SwiperSlide key={`${index}-${banner.id}`}>
                <img
                  src={banner?.url}
                  alt=""
                  className="hero__section-banner"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
