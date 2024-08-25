import './styles.scss';
import SectionOfMenuComponent from './Partials/SectionOfMenu';

const MenuSection = () => {
  return (
    <div className="menu__section">
      <div className="menu__section-nav container">
        {/* TODO: Implement nav list component of menu in here */}
      </div>

      <div className="menu__section-content">
        {Array.from({ length: 4 }).map((_, index) => (
          <SectionOfMenuComponent key={index} />
        ))}
      </div>
    </div>
  );
};

export { MenuSection };
