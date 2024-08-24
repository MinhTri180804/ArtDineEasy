import { CloseIcon } from '../../../../assets/icons';
import { googleLogo } from '../../../../assets/images';
import FooterAuthModal from '../Partials/Footer';
import HeadingAuthModal from '../Partials/Heading';
import LoginForm from './Partials/LoginForm';
import './styles.scss';

interface ILoginModalProps {
  onClose: () => void;
  onChangeModal: () => void;
}

const LoginModal = ({ onClose, onChangeModal }: ILoginModalProps) => {
  return (
    <div className="login__modal">
      <div className="close" onClick={onClose}>
        <CloseIcon />
      </div>
      <div className="login__modal-container">
        <section className="heading">
          <HeadingAuthModal
            title="Đăng nhập"
            subTitle="Chào mừng bạn đã quay trở lại"
          />
        </section>

        <div className="other__method">
          <div className="method__google btn__login">
            <img src={googleLogo} alt="logo of google" />
          </div>
        </div>

        <div className="or">
          <div className="or__line"></div>
          <div className="or__text">Hoặc</div>
          <div className="or__line"></div>
        </div>

        <div className="login__form">
          <LoginForm onClose={onClose} />
        </div>

        <div className="footer">
          <FooterAuthModal
            actionContent={{
              contentNormal: 'Bạn chưa có tài khoản ?',
              contentTarget: 'Đăng ký ngay',
              handleAction: onChangeModal,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { LoginModal };
