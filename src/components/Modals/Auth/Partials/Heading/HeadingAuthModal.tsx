import './styles.scss';
import { logoBrand } from '../../../../../assets/images';

interface IHeadingAuthModalProps {
  title: string;
  subTitle: string;
}

const HeadingAuthModal = ({ title, subTitle }: IHeadingAuthModalProps) => {
  return (
    <div className="heading__auth-modal">
      <div className="heading">
        <div className="logo">
          <img src={logoBrand} alt="logo of art dine ease brand " />
        </div>

        <div className="content">
          <h2 className="content__title">{title}</h2>
          <div className="content__sub">{subTitle}</div>
        </div>
      </div>
    </div>
  );
};

export { HeadingAuthModal };
