import { HTMLProps, Ref, forwardRef, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '../../../../assets/icons';
import './styles.scss';

interface IInputPasswordFieldProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputPasswordField = forwardRef(
  (props: IInputPasswordFieldProps, ref: Ref<HTMLInputElement>) => {
    const [showPassword, setShowPassword] = useState(false);
    const { label, error, disabled, ...inputProps } = props;
    const [password, setPassword] = useState('');
    return (
      <div className={`field-group ${disabled && 'disabled'}`}>
        {label && <label htmlFor="">{label}</label>}

        <div>
          <div className="input__container">
            <input
              ref={ref}
              type={showPassword ? 'text' : 'password'}
              {...inputProps}
              disabled={disabled}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div
              className="input__container--icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {password && (showPassword ? <EyeSlashIcon /> : <EyeIcon />)}
            </div>
          </div>
          {error && (
            <p className="message__input message__input-errors">{error}</p>
          )}
        </div>
      </div>
    );
  }
);

export { InputPasswordField };
