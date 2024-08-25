import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../../../../commons/Field/Input';
import './styles.scss';
import { Link } from 'react-router-dom';
import ButtonComponent from '../../../../../commons/Button';
import InputPasswordField from '../../../../../commons/Field/InputPassword';
// import authApi from '../../../../../../Api/Auth/authApi';
import { ILoginRequest } from '../../../../../../types/request/Login/loginType';
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { useState } from 'react';
// import userApi from '../../../../../../Api/User/userApi';

interface IFormLogin extends ILoginRequest {}
interface ILoginFormProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: ILoginFormProps) => {
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLogin>();

  const handleLogin: SubmitHandler<IFormLogin> = (_) => {
    toast.promise(
      async () => {
        // const res = await authApi.login(data);
        // const { status, message, result } = res;
        // TODO: implement validate status code of response ( in now, backend mock status code 1000);
        if (true) {
          // localStorage.setItem('authentication', JSON.stringify(result));

          // const res = await userApi.getInfo();
          // Implement logic to save user info to local storage

          return Promise.resolve();
        }

        // return Promise.reject(message);
      },
      {
        pending: {
          render: () => {
            setButtonLoading(true);
            return 'Đang xử lý...';
          },
        },
        success: {
          render: () => {
            onClose();
            setButtonLoading(false);
            return 'Đăng nhập thành công';
          },
        },
        error: {
          render: (error) => {
            setButtonLoading(false);
            return `Đăng nhập thất bại: ${error}`;
          },
        },
      }
    );
  };
  return (
    <form
      action=""
      className="login__form-container"
      onSubmit={handleSubmit(handleLogin)}
    >
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

      <InputPasswordField
        label="Mật khẩu"
        {...register('password', {
          required: 'Mật khẩu không được để trống',
          minLength: {
            value: 3,
            message: 'Mật khẩu phải lớn hơn 6 ký tự',
          },
        })}
        error={errors.password?.message}
      />

      <div className="options-group">
        <div className="option-remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Ghi nhớ đăng nhập</label>
        </div>

        <div className="option-forgot">
          <Link to="/forgot-password">Quên mật khẩu?</Link>
        </div>
      </div>

      <ButtonComponent
        content="Đăng nhập"
        size="40"
        type="primary"
        loading={buttonLoading}
      />
    </form>
  );
};

export { LoginForm };
