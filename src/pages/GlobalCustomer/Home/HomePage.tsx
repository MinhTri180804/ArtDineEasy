import HeroSection from './partials/HeroSection';
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
    </div>
  );
};

export { HomePage };
