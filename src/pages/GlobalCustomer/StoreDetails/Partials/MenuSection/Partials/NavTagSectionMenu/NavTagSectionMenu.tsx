import { useState } from 'react';
import TagMenuSectionComponent from '../../../../../../../components/TagMenuSection';
import './styles.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/scss';

interface INavTagSectionMenuComponentProps {
  tagList: {
    id: string;
    title: string;
  }[];
  onTagClick: (idTag: string) => void;
}

const NavTagSectionMenuComponent = ({
  tagList,
  onTagClick,
}: INavTagSectionMenuComponentProps) => {
  const [activeTag, setActiveTag] = useState<string>(tagList[0]?.id );

  const handleClick = (idTag: string) => {
    setActiveTag(idTag);
    onTagClick(idTag);
  };

  return (
    <div className="nav__tag-section-menu--component">
      <Swiper slidesPerView={'auto'}>
        {tagList.map((tag, index) => (
          <SwiperSlide className="swiper-slide">
            <TagMenuSectionComponent
              key={index}
              title={tag.title}
              handleClick={handleClick}
              isActive={activeTag === tag.id}
              idTag={tag.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { NavTagSectionMenuComponent };
