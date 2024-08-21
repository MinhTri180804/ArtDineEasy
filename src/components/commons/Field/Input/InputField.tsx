import { HTMLProps, Ref, forwardRef } from 'react';
import './styles.scss';

interface IInputFieldProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputField = forwardRef(
  (props: IInputFieldProps, ref: Ref<HTMLInputElement>) => {
    const { label, error, disabled, ...inputProps } = props;

    return (
      <div className={`field-group ${disabled && 'disabled'}`}>
        {label && <label htmlFor="">{label}</label>}

        <div>
          <input ref={ref} type="text" {...inputProps} disabled={disabled} />
          {error && (
            <p className="message__input message__input-errors">{error}</p>
          )}
        </div>
      </div>
    );
  }
);

export { InputField };
