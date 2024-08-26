import { toast } from 'react-toastify';
import { CloseIcon } from '../../../../assets/icons';
import FooterAuthModal from '../Partials/Footer';
import HeadingAuthModal from '../Partials/Heading';
import OTPRegisterForm from './Partials/OTPRegisterForm';
import './styles.scss';
import authApi from '../../../../Api/Auth/authApi';

interface IOTPRegisterModalProps {
  onClose: () => void;
}

const OTPRegisterModal = ({ onClose }: IOTPRegisterModalProps) => {
  const sendAgainOTP = () => {
    const infoRegister = localStorage.getItem('infoRegister');

    if (infoRegister) {
      const info = JSON.parse(infoRegister);

      toast.promise(authApi.registerOTP(info), {
        pending: 'Đang gửi lại mã OTP',
        success: {
          render: (response) => {
            if (response.data.result) {
              localStorage.setItem(
                'OTP-code',
                JSON.stringify(response.data.result)
              );
            } else {
              toast.error('Gửi lại mã OTP thất bại');
            }
            return 'Đã gửi lại mã OTP';
          },
        },
        error: 'Gửi lại mã OTP thất bại',
      });

      return;
    }

    toast.error('Xảy ra lỗi vui lòng đăng kí lại !!');
  };
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
              contentNormal: 'Bạn chưa nhận được mã? ',
              contentTarget: 'Gửi lại',
              handleAction: sendAgainOTP,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { OTPRegisterModal };
