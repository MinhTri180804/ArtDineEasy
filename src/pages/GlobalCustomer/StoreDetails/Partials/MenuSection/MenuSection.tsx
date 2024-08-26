import { useRef } from 'react';
import { empty } from '../../../../../assets/images';
import SpinnerLoading from '../../../../../components/commons/SpinnerLoading';
import useQueryMenuOfStore from '../../../../../hooks/queries/useQueryMenuOfStore';
import NavTagSectionMenuComponent from './Partials/NavTagSectionMenu';
import SectionOfMenuComponent from './Partials/SectionOfMenu';
import './styles.scss';

interface IMenuSectionProps {
  idStore: string | number;
}

const MenuSection = ({ idStore }: IMenuSectionProps) => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const { data, isLoading, error } = useQueryMenuOfStore(idStore);

  if (isLoading) {
    return (
      <div className="menu__section--loading">
        <SpinnerLoading />
      </div>
    );
  }
  if (!data) {
    return null;
  }

  if (error) {
    return <div>Error...</div>;
  }

  const scrollToSection = (sectionId: string) => {
    const offset = 140;

    if (sectionRefs.current[sectionId]) {
      const element = sectionRefs.current[sectionId] as HTMLDivElement;
      const yOffset =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  const { result: sectionList } = data;
  const sectionFormat = sectionList?.map((section) => {
    return {
      id: section?.id,
      title: section?.sectionName,
      data: section?.productResponeseDTOSet.content,
    };
  });

  if (data.result.length === 0) {
    return (
      <div className="menu__section-empty">
        <div className="container">
          <div className="empty__menu">
            <div className="image">
              <img src={empty} alt="" />
            </div>

            <div className="text">
              Cửa hàng chưa cập nhật thực đơn. Vui lòng quay lại sau!
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="menu__section">
      <div className="menu__section-nav">
        <div className="container">
          <NavTagSectionMenuComponent
            onTagClick={scrollToSection}
            tagList={sectionFormat}
          />
        </div>
      </div>

      <div className="menu__section-content">
        {sectionList?.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[section?.id] = el)}
            className="container"
          >
            <SectionOfMenuComponent
              sectionOfMenuData={section.productResponeseDTOSet.content}
              sectionName={section.sectionName}
              sectionId={section.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { MenuSection };
