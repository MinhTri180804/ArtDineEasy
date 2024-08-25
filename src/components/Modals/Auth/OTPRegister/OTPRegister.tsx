import { CloseIcon } from '../../../../assets/icons';
import FooterAuthModal from '../Partials/Footer';
import HeadingAuthModal from '../Partials/Heading';
import OTPRegisterForm from './Partials/OTPRegisterForm';
import './styles.scss';

interface IOTPRegisterModalProps {
  onClose: () => void;
}

const OTPRegisterModal = ({ onClose }: IOTPRegisterModalProps) => {
  return (
    <div className="otp__modal">
      <div className="close" onClick={onClose}>
        <CloseIcon />
      </div>
      <div className="otp__modal-container">
        <section className="heading">
          <HeadingAuthModal
            title="Xác thực mã OTP"
            subTitle="Vui lòng kiểm tra email và nhập mã OTP để xác thực tài khoản"
          />
        </section>

        <div className="otp__form">
          <OTPRegisterForm onClose={onClose} />
        </div>

        <div className="footer">
          <FooterAuthModal
            actionContent={{
              contentNormal: 'Bạn đã có tài khoản ? ',
              contentTarget: 'Đăng nhập ngay',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { OTPRegisterModal };
