import { SubmitHandler, useForm } from 'react-hook-form';
import './styles.scss';
import ButtonComponent from '../../../../../commons/Button';
import { toast } from 'react-toastify';
import { useState } from 'react';
import authApi from '../../../../../../Api/Auth/authApi';
import { IRegisterRequest } from '../../../../../../types/request/Register/registerType';
interface IForm {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
}

interface IRegisterFormProps {
  onClose: () => void;
}
const OTPRegisterForm = ({ onClose }: IRegisterFormProps) => {
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<IForm>();
  const handleSubmitForm: SubmitHandler<IForm> = (data) => {
    setButtonLoading(true);
    const otp = `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`;
    const otpSuccess = localStorage.getItem('OTP-code');
    if (otp === otpSuccess) {
      localStorage.removeItem('OTP-code');
      const infoRegister = localStorage.getItem('infoRegister');

      if (infoRegister) {
        const info: IRegisterRequest = JSON.parse(infoRegister);
        toast.promise(authApi.register(info), {
          pending: {
            render: () => {
              return 'Đang xử lý...';
            },
          },
          success: {
            render: () => {
              setButtonLoading(false);
              localStorage.removeItem('infoRegister');

              onClose();
              return 'Xác thực thành công';
            },
          },
        });
      } else {
        toast.error('Đăng ký thất bại');
        setButtonLoading(false);
      }
    } else {
      toast.error('Mã OTP không chính xác');
      setButtonLoading(false);
    }
  };
  return (
    <div className="register__otp">
      <form id="otp-form" onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="form-group">
          <input
            type="text"
            className="otp-input"
            maxLength={1}
            {...register('code1', {
              required: true,
            })}
          />
          <input
            type="text"
            className="otp-input"
            maxLength={1}
            {...register('code2', {
              required: true,
            })}
          />

          <input
            type="text"
            className="otp-input"
            maxLength={1}
            {...register('code3', {
              required: true,
            })}
          />

          <input
            type="text"
            className="otp-input"
            maxLength={1}
            {...register('code4', {
              required: true,
            })}
          />

          <input
            type="text"
            className="otp-input"
            maxLength={1}
            {...register('code5', {
              required: true,
            })}
          />

          <input
            type="text"
            className="otp-input"
            maxLength={1}
            {...register('code6', {
              required: true,
            })}
          />
        </div>

        <ButtonComponent content="Xác nhận" loading={buttonLoading} />
      </form>
    </div>
  );
};

export { OTPRegisterForm };
