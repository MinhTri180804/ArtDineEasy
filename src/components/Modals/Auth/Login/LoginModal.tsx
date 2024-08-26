import { useNavigate } from 'react-router-dom';
import { CloseIcon } from '../../../../assets/icons';
import { googleLogo } from '../../../../assets/images';
import { setToken } from '../../../../utils/authentication';
import FooterAuthModal from '../Partials/Footer';
import HeadingAuthModal from '../Partials/Heading';
import LoginForm from './Partials/LoginForm';
import './styles.scss';
import { OAuthConfig } from '../../../../config/OAuthConfig';

interface ILoginModalProps {
  onClose: () => void;
  onChangeModal: () => void;
}

const LoginModal = ({ onClose, onChangeModal }: ILoginModalProps) => {
  const handleClickGoogle = () => {
    const callbackUrl = OAuthConfig.redirectUri;
    const authUrl = OAuthConfig.authUri;
    const googleClientId = OAuthConfig.clientId;

    //Redirect to Google form auth
    const targetUrl = `${authUrl}?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile`;

    window.location.href = targetUrl;
  };

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
          <div
            className="method__google btn__login"
            onClick={() => handleClickGoogle()}
          >
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
