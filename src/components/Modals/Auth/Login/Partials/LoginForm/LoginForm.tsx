import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../../../../commons/Field/Input';
import './styles.scss';
import { Link } from 'react-router-dom';
import ButtonComponent from '../../../../../commons/Button';

interface IFormLogin {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLogin>();

  const handleLogin: SubmitHandler<IFormLogin> = (data) => {
    console.log(data);
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

      <div className="options-group">
        <div className="option-remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Ghi nhớ đăng nhập</label>
        </div>

        <div className="option-forgot">
          <Link to="/forgot-password">Quên mật khẩu?</Link>
        </div>
      </div>

      <ButtonComponent content="Đăng nhập" size="40" type="primary" />
    </form>
  );
};

export { LoginForm };
