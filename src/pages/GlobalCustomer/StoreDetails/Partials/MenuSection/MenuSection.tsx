import './styles.scss';
import SectionOfMenuComponent from './Partials/SectionOfMenu';
import NavTagSectionMenuComponent from './Partials/NavTagSectionMenu';
import useQueryMenuOfStore from '../../../../../hooks/queries/useQueryMenuOfStore';
import { useRef } from 'react';

interface IMenuSectionProps {
  idStore: string | number;
}

const MenuSection = ({ idStore }: IMenuSectionProps) => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const { data, isLoading, error } = useQueryMenuOfStore(idStore);

  if (!data) {
    return null;
  }

  if (isLoading) {
    // TODO: Implement loading component in here
    return <div>Loading...</div>;
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
  const sectionFormat = sectionList.map((section) => {
    return {
      id: section.id,
      title: section.sectionName,
      data: section.productResponeseDTOSet.content,
    };
  });

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
        {sectionList.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[section.id] = el)}
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
