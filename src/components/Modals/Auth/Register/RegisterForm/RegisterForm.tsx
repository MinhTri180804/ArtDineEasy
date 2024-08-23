import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../../../commons/Field/Input';
import './styles.scss';
import ButtonComponent from '../../../../commons/Button';

interface IRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterForm>();
  const handleRegister: SubmitHandler<IRegisterForm> = (data) => {
    console.log(data);
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
              value ===
                (document.getElementById('password') as HTMLInputElement)
                  ?.value || 'Mật khẩu không khớp',
          })}
          error={errors.confirmPassword?.message}
        />
      </div>

      <ButtonComponent content="Đăng ký" size="40" type="primary" />
    </form>
  );
};

export { RegisterForm };
