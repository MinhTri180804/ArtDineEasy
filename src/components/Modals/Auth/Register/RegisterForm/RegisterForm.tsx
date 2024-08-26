import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../../../commons/Field/Input';
import './styles.scss';
import ButtonComponent from '../../../../commons/Button';
import authApi from '../../../../../Api/Auth/authApi';
import { toast } from 'react-toastify';
import { useState } from 'react';

interface IRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface IRegisterFormProps {
  onClose: () => void;
  onOpenOTP: () => void;
}

const RegisterForm = ({ onOpenOTP }: IRegisterFormProps) => {
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<IRegisterForm>();
  const handleRegister: SubmitHandler<IRegisterForm> = async (data) => {
    const { firstName, lastName, email, password, phone } = data;
    setButtonLoading(true);
    toast.promise(
      authApi
        .registerOTP({
          firstName,
          lastName,
          email,
          phoneNumber: phone,
          password,
        })
        .then((response) => {
          toast.warning('Nhập mã OTP để xác thực tài khoản');
          localStorage.setItem('OTP-code', JSON.stringify(response.result));

          localStorage.setItem(
            'infoRegister',
            JSON.stringify({ firstName, lastName, email, phone, password })
          );
          setButtonLoading(false);
          onOpenOTP();
        })
        .catch((error) => {
          console.log(error);
          toast.error('Đăng ký thất bại');
        }),
      {
        pending: 'Đang xử lý...',
        success: {
          render: () => {
            return 'Đăng ký thành công';
          },
        },
        error: 'Đăng ký thất bại',
      }
    );
  };
  return (
    <form
      className="register__form-container"
      onSubmit={handleSubmit(handleRegister)}
    >
      <div className="register__form-fields">
        <div className="input__group">
          <InputField
            label="Họ"
            type="text"
            {...register('firstName', {
              required: 'Họ không được để trống',
            })}
            error={errors.firstName?.message}
          />

          <InputField
            label="Tên"
            type="text"
            {...register('lastName', {
              required: 'Tên không được để trống',
            })}
            error={errors.lastName?.message}
          />
        </div>

        <InputField
          label="Email"
          type="email"
          {...register('email', {
            required: 'Email không được để trống',
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Email không hợp lệ',
            },
          })}
          error={errors.email?.message}
        />

        <InputField
          label="Số điện thoại"
          type="text"
          {...register('phone', {
            required: 'Số điện thoại không được để trống',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Số điện thoại không hợp lệ',
            },
          })}
          error={errors.phone?.message}
        />

        <InputField
          label="Mật khẩu"
          type="password"
          {...register('password', {
            required: 'Mật khẩu không được để trống',
            minLength: {
              value: 6,
              message: 'Mật khẩu phải lớn hơn 6 ký tự',
            },
          })}
          error={errors.password?.message}
        />

        <InputField
          label="Nhập lại mật khẩu"
          type="password"
          {...register('confirmPassword', {
            required: 'Nhập lại mật khẩu không được để trống',
            validate: (value) =>
              value === getValues('password') || 'Mật khẩu không khớp',
          })}
          error={errors.confirmPassword?.message}
        />
      </div>

      <ButtonComponent
        content="Đăng ký"
        size="40"
        type="primary"
        loading={buttonLoading}
      />
    </form>
  );
};

export { RegisterForm };
