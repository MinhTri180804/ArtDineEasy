import VertSection from './partials/vertSection';
import './styles.scss';
import logoWhite from '../../../../assets/images/logo-white.svg';

const vertProductData = {
  title: 'Product',
  dataVert: [
    {
      content: 'landing page',
      redirectLink: '/landing-page',
    },
    {
      content: 'popup builder',
    },

    {
      content: 'web-design',
    },
    {
      content: 'content',
    },
    {
      content: 'integrations',
    },
  ],
};

const vertUseCaseData = {
  title: 'use case',
  dataVert: [
    {
      content: 'web-designers',
      redirectLink: '/web-designers',
    },
    {
      content: 'marketers',
    },
    {
      content: 'small business',
    },
    {
      content: 'website builder',
    },
  ],
};

const vertCompanyData = {
  title: 'company',
  dataVert: [
    {
      content: 'about us',
      redirectLink: '/about-us',
    },
    {
      content: 'careers',
    },
    {
      content: 'FAQs',
    },
    {
      content: 'contact us',
    },
  ],
};

const FooterComponent = () => {
  return (
    <div className="footer__container container">
      <section className="footer__container-brand">
        <div className="logo">
          <img src={logoWhite} alt="" />
        </div>

        <div className="slogan">Professional Web Design</div>

        <div className="short-description">
          Hi! My name ia Dmitrii Rogoza and i’m an expert in web design and
          branding. I can help you make your website more attractive
        </div>
      </section>
      <section className="footer__container-product vert__section">
        <VertSection
          title={vertProductData.title}
          dataVert={vertProductData.dataVert}
        />
      </section>

      <section className="footer__container-use--case vert__section">
        <VertSection
          title={vertUseCaseData.title}
          dataVert={vertUseCaseData.dataVert}
        />
      </section>

      <section className="footer__container-company vert__section">
        <VertSection
          title={vertCompanyData.title}
          dataVert={vertCompanyData.dataVert}
        />
      </section>

      <section className="footer__container-socials">
        <div>Thank</div>

        <div>You</div>
      </section>
    </div>
  );
};

export { FooterComponent };
