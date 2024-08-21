import { HTMLProps, Ref, forwardRef } from 'react';
import './styles.scss';

interface IInputFieldProps extends HTMLProps<HTMLInputElement> {
  label: string;
  error: string;
}

const InputField = forwardRef(
  (props: IInputFieldProps, ref: Ref<HTMLInputElement>) => {
    const { label, error, ...inputProps } = props;

    return (
      <div className="field-group">
        {label && <label htmlFor="">{label}</label>}

        <input ref={ref} type="text" {...inputProps} />
        {error && (
          <p className="message__input message__input-errors">{error}</p>
        )}
      </div>
    );
  }
);

export { InputField };
