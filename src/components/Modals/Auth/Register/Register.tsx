import { useState } from 'react';
import { CloseIcon } from '../../../../assets/icons';
import { googleLogo } from '../../../../assets/images';
import OTPRegisterModal from '../OTPRegister';
import FooterAuthModal from '../Partials/Footer';
import HeadingAuthModal from '../Partials/Heading';
import RegisterForm from './RegisterForm';
import './styles.scss';

interface IRegisterModalProps {
  onClose: () => void;
  onChangeModal?: () => void;
  hasPrevInfo?: boolean;
}

const RegisterModal = ({
  hasPrevInfo,
  onClose,
  onChangeModal,
}: IRegisterModalProps) => {
  const [isShowOTP, setIsShowOTP] = useState(hasPrevInfo);

  const onOpenOTP = () => {
    setIsShowOTP(true);
  };

  const onCloseOTP = () => {
    setIsShowOTP(false);
    onClose();
  };

  if (isShowOTP) {
    return <OTPRegisterModal onClose={onCloseOTP} />;
  }

  return (
    <div className="register__modal">
      <div className="close" onClick={onClose}>
        <CloseIcon />
      </div>
      <div className="register__modal-container">
        <section className="heading">
          <HeadingAuthModal
            title="Đăng Ký"
            subTitle="Chào mừng bạn đến với chúng tôi"
          />
        </section>

        <div className="register__form">
          <RegisterForm onClose={onClose} onOpenOTP={onOpenOTP} />
        </div>

        <div className="or">
          <div className="or__line"></div>
          <div className="or__text">Hoặc</div>
          <div className="or__line"></div>
        </div>

        <div className="other__method">
          <div className="method__google btn__login">
            <img src={googleLogo} alt="logo of google" />
          </div>
        </div>

        <div className="footer">
          <FooterAuthModal
            actionContent={{
              contentNormal: 'Bạn đã có tài khoản ? ',
              contentTarget: 'Đăng nhập ngay',
              handleAction: onChangeModal,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { RegisterModal };
