import { useRef } from 'react';
import SwiperCore from 'swiper';
import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../../../assets/icons';
import ButtonComponent from '../../../../../components/commons/Button';
import { ITopicFoodStore } from '../../../../../types/response/Topic/topicType';
import { TitleSection } from '../TitleSection/TitleSection';
import './styles.scss';
import StoreComponent from '../../../../../components/Store';
import { getFinalSegments } from '../../../../../utils/spliceString';

interface IStoreSwiperSectionProps {
  title: string;

  dataStores: ITopicFoodStore[];
}

SwiperCore.use([Navigation]);

const StoreSwiperSection = ({
  title,
  dataStores,
}: IStoreSwiperSectionProps) => {
  const [titleNormal, titleTarget] = getFinalSegments(title, 2);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      if (swiperRef.current.isEnd) {
        swiperRef.current.slideTo(0);
        return;
      }

      swiperRef.current.slideNext();
      return;
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();

      if (swiperRef.current.isBeginning) {
        swiperRef.current.slideTo(swiperRef.current.slides.length - 1);
        return;
      }
    }
  };

  return (
    <div className="store__swiper-container">
      <TitleSection titleNormal={titleNormal} titleTarget={titleTarget} />
      <Swiper
        spaceBetween={24}
        slidesPerView={4}
        className="mySwiper"
        // cssMode
        mousewheel={true}
        modules={[Mousewheel]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <div className="swiper-wrapper">
          {dataStores?.map((store, index) => (
            <SwiperSlide key={index}>
              <StoreComponent store={store} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <div className="navigation">
        <button className="navigation--left" onClick={handlePrev}>
          <ArrowLeftIcon />
        </button>

        <button className="navigation--right" onClick={handleNext}>
          <ArrowRightIcon />
        </button>
      </div>

      <div className="actions-more">
        <ButtonComponent
          content="Xem thêm"
          iconPosition="right"
          type="secondary"
          size="40"
          Icon={<ArrowRightIcon />}
        />
      </div>
    </div>
  );
};

export { StoreSwiperSection };
